import { File } from 'buffer'
import React, { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

import { Button, DropdownProps } from 'flowbite-react';
import { IF } from '../../special/if';
import XMarkOnHover from '../../misc/xMarkOnHover';
import { PutObjectCommand, PutObjectCommandInput, S3Client } from '@aws-sdk/client-s3';
import { AWS_ACCESS_KEYWORD, BUCKET_NAME } from '../../../constant';




const baseStyle: React.CSSProperties = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const thumbsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb: CSSProperties = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner: CSSProperties = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img: CSSProperties = {
    display: 'block',
    width: 'auto',
    height: '100%',
}

interface previewFile extends File {
    previewURL: string
}



const ImgUploadForm = () => {
    const [file, setFile] = useState<previewFile | null>(null);
    const [originalFile, setOriginalFile] = useState<Blob | null>(null);
    const {
        getRootProps,
        getInputProps,
        isFocused,
        acceptedFiles,
        fileRejections,
        inputRef,
        isDragAccept,
        isDragActive,
        isDragReject,
        isFileDialogActive,
        open,
        rootRef,
    } = useDropzone({
        accept: {
            'image/*': []
        },
        multiple: false,
        onDrop: (acceptedFiles: any) => {
            console.log(acceptedFiles);

            setOriginalFile(acceptedFiles);
            setFile(Object.assign(acceptedFiles[0], {
                previewURL: URL.createObjectURL(acceptedFiles[0])
            }))
        }
    });
    const cred = JSON.parse(localStorage[AWS_ACCESS_KEYWORD])

    const s3 = new S3Client({ credentials: {
        accessKeyId:"AKIASATHD7ECQ2IAG7N6 ",
        secretAccessKey:"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",
    } , region: "eu-west-3"});

    const uploadToS3 = async () => {
        if (!file || !originalFile) return;
        try {
            const params: PutObjectCommandInput = {
                Bucket: BUCKET_NAME,
                Key: file.name,
                Body: originalFile,
                ContentType: file.type
            }
            const uploadCommand = new PutObjectCommand(params)
            const s3Res = await s3.send(uploadCommand)
            console.log(s3Res);
        }
        catch (error) {
            console.error(error);
        }
    }
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    const thumbs = file &&
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                < img className=''
                    src={file.previewURL}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.previewURL) }}
                />


            </div>
        </div>

    useEffect(() => {
        console.log(cred);
    }, [])
    return (
        <section dir='rtl' className="container">
            {file ? <div className='flex items-center space-x-reverse space-x-2' >
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
                <div className='flex flex-col space-y-2'>
                    <Button onClick={uploadToS3}
                     className='h-9 w-30'>שמירה בענן</Button>
                    <Button onClick={() => setFile(null)}
                        className='h-9 w-30' color={'failure'}>ביטול </Button>
                </div>
            </div>
                :
                <div {...getRootProps({ className: 'dropzone', style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            }

        </section>
    );
}



export default ImgUploadForm