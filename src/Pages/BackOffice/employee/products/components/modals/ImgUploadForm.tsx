import { File } from 'buffer'
import { Button } from 'flowbite-react';
import React, { CSSProperties, Dispatch, FC, useCallback, useEffect, useMemo, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { UseFormClearErrors } from 'react-hook-form';
import { IF } from '../../../../../../components/special/if';





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
interface props {
    clearError: UseFormClearErrors<any>
    setImage: Dispatch<React.SetStateAction<any>>
    editImageUrl?: string
    editImageName?: string
}

const ImgUploadForm: FC<props> = ({ clearError, setImage, editImageName, editImageUrl }) => {
    const [file, setFile] = useState<previewFile | null>(null);
    const [originalFile, setOriginalFile] = useState<Blob | null>(null);
    const [editMode, setEditMode] = useState(false)
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
            console.log(acceptedFiles[0]);
            clearError('root')
            setOriginalFile(acceptedFiles);
            setImage(acceptedFiles[0])
            setFile(Object.assign(acceptedFiles[0], {
                previewURL: URL.createObjectURL(acceptedFiles[0])
            }))
        }
    });


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

    const thumbsEdit = editImageUrl &&
        <div style={thumb} key={editImageName}>
            <div style={thumbInner}>
                < img className=''
                    src={editImageUrl}
                    style={img}
                />
            </div>
        </div>

    useEffect(() => {
        if (editImageName && editImageUrl) setEditMode(true)
    }, [])

    return (
        <section dir='rtl' className="container">
            <IF condition={file}>


                <div className='flex items-center space-x-reverse space-x-2' >
                    <aside style={thumbsContainer}>
                        {thumbs}
                    </aside>
                    <div className='flex flex-col space-y-2'>
                        <Button onClick={() => setFile(null)}
                            className='h-9 w-30' color={'failure'}>ביטול </Button>
                    </div>
                </div>
            </IF>

            <IF condition={!file && !editMode}>
                <div {...getRootProps({ className: 'dropzone', style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            </IF>

            <IF condition={editMode}>
                <div className='flex items-center space-x-reverse space-x-2' >
                    <aside style={thumbsContainer}>
                        {thumbsEdit}
                    </aside>
                    <div className='flex flex-col space-y-2'>
                        <Button onClick={() => setEditMode(false)}
                            className='h-9 w-30' color={'failure'}>ביטול </Button>
                    </div>
                </div>
            </IF>

        </section>
    );
}



export default ImgUploadForm