import { FileInput, Label } from 'flowbite-react'
import React, { FC, useState } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { BasicProduct, categoryDto } from '../../../../../../interfaces'
import { Icon } from '@iconify/react'
interface props {
    register: UseFormRegister<BasicProduct>
    setValue: UseFormSetValue<BasicProduct>
}
const ImgUploadForm: FC<props> = ({ register, setValue }) => {
    const [prevUrl, setPrevUrl] = useState<string | null>(null)
    const { ref, onBlur, onChange, name } = register("image", {
        required: {
            value: true,
            message: "required!!!"
        },
    })
    return (
        <div
            className=""
            id="fileUpload"
        >
            <div className='flex  justify-center items-center '>

                <FileInput
                    className='w-[98%]'
                    onChange={(e) => {
                        if (e.target.files) {
                            if (prevUrl) URL.revokeObjectURL(prevUrl)
                            setPrevUrl(URL.createObjectURL(e.target.files[0]))
                        }
                    }}
                    name={name}
                    onBlur={onBlur}
                    ref={ref}
                    id="file"
                    accept="image/png, image/jpeg"
                />

            </div>
            <div className='flex w-full  mt-5  '>
                {prevUrl && <img className="group h-[120px] max-w-xs w-[200px] bg-no-repeat bg-cover " src={prevUrl}

                />}
                {prevUrl &&
                    <div className='   flex h-[120px] justify-end   '>
                    <Icon icon="ph:x"
                        onClick={() => {
                            setValue('image', undefined)
                            setPrevUrl(null)
                        }}
                        className='relative -left-7 bg-gray-900 bg-opacity-50 cursor-pointer' height={30} color='white' />
                </div>
                }

            </div>
        </div>
    )
}

export default ImgUploadForm