import { FileInput, Label } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { BasicProduct, categoryDto } from '../../../../../../interfaces'
import { Icon } from '@iconify/react'
import { UseToggle } from 'sk-use-toggle/src'
interface props {
    register: UseFormRegister<any> 
    setValue: UseFormSetValue<any> 
    getValues: UseFormGetValues<any> 
}
const ImgUploadForm: FC<props> = ({ register, setValue, getValues }) => {
    const [prevUrl, setPrevUrl] = useState<string | null>(null)
    const [inactive, toggleInactive] = useState(false)
    const { ref, onBlur, onChange, name } = register("image", {
        validate(v) {
            if (typeof v === 'string') return true
            else if (typeof v === 'object') return true
            else return "נא לספק תמונה תקינה"
        }
    })
    useEffect(() => {
        const image = getValues('image')
        console.log(image);
        
        if (typeof image === "string") {
            setPrevUrl(image);
            toggleInactive(true)
        }

    }, [])
    return (
        <div
            className=""
            id="fileUpload"
        >
            <div className='flex  justify-center items-center '>

                <FileInput
                    className='w-[98%] disabled:opacity-70'
                    onChange={(e) => {
                        if (e.target.files) {
                            if (prevUrl) URL.revokeObjectURL(prevUrl)
                            setPrevUrl(URL.createObjectURL(e.target.files[0]))
                            // toggleInactive()
                        }
                    }}
                    disabled={inactive}
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
                                toggleInactive(false)
                            }}
                            className='relative -left-7 bg-gray-900 bg-opacity-50 cursor-pointer' height={30} color='white' />
                    </div>
                }

            </div>
        </div>
    )
}

export default ImgUploadForm