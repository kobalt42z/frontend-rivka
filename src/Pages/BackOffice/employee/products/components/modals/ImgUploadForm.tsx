import { File } from 'buffer'
import { Button } from 'flowbite-react';
import React, { CSSProperties, Dispatch, FC, useCallback, useEffect, useMemo, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { IF } from '../../../../../../components/special/if';
import { useAppDispatch, useAppSelector } from '../../../../../../features/hooks';
import { deleteImage, setImage } from '../../../../../../features/Slices/productFrom.slice';
import { Icon } from '@iconify/react';
import { BasicProduct } from '../../../../../../interfaces';





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
    errors:FieldErrors<BasicProduct>
}

const ImgUploadForm: FC<props> = ({ clearError,errors  }) => {
    const [imgPrevUrl, setImgPrevUrl] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const imgFile = useAppSelector((state) => state.productFrom.image)
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
        onDrop: (acceptedFiles: globalThis.File[]) => {
            console.log(acceptedFiles[0]);
            clearError('root')
            dispatch(setImage(acceptedFiles[0]));
            setImgPrevUrl(URL.createObjectURL(acceptedFiles[0]))
        }
    });


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ||errors.root? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    const thumbs = imgPrevUrl && imgFile &&
        <div style={thumb} key={imgFile.name}>
            <div style={thumbInner}>
                < img className=''
                    src={imgPrevUrl}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(imgPrevUrl) }}
                />
            </div>
        </div>



    useEffect(() => {
        
        imgFile && setImgPrevUrl(URL.createObjectURL(imgFile))
    }, [])

    return (
        <section dir='rtl' className="container">
            <IF condition={imgFile}>


                <div className='flex items-center space-x-reverse space-x-2' >
                    <aside style={thumbsContainer}>
                        {thumbs}
                    </aside>
                    <div className='flex flex-col space-y-2 '>
                        {/* <Button onClick={() => dispatch(deleteImage())}
                            className='h-9 w-30' color={'failure'}>ביטול </Button> */}
                    </div>
                </div>
                <button className=' relative top-[-108px] -left-[10px]' onClick={()=>dispatch(deleteImage())} ><Icon icon="ph:x" height={20} /></button>
            </IF>

            <IF condition={!imgFile}>
                <div {...getRootProps({ className: 'dropzone', style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            </IF>



        </section>
    );
}



export default ImgUploadForm