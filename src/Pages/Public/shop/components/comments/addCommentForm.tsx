import React, { useState } from 'react'
import Rating from '../../../../../components/ratings/Rating'
import ClassicHr from '../../../../../components/HR/ClassicHr'
import avatarPlaceHolder from '../../../../../assets/avatar.svg'
import MainButtons from '../../../../../components/buttons/MainButtons'
import { Icon } from '@iconify/react'
import Star from '../../../../../components/ratings/Star'
import { currentDate } from '../../../../../functions/currentDate'
import { toggler } from 'sk-use-toggle/src'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CommentInput } from '../../../../../interfaces'
import { useAddCommentMutation } from '../../../../../features/API/Products.Api'
import { useAppSelector } from '../../../../../features/hooks'


interface props {
  toggleClose: toggler
  currentProduct: string
}
const AddCommentForm: React.FC<props> = ({ toggleClose, currentProduct }) => {
  const user = useAppSelector(slices => slices.user.user)
  const [rate, setRate] = useState(0)
  const { register, clearErrors, setError, handleSubmit, setValue, formState: { errors } } = useForm<CommentInput>({
    defaultValues: {
      body: "",
      rating: 0
    },
  })
  const [addComment, { isError, isLoading, isSuccess }] = useAddCommentMutation()

  const onSubmit: SubmitHandler<CommentInput> = async data => {
    console.log(data, currentProduct,);
    try {
      const resp = await addComment({ productId: currentProduct, body: data }).unwrap()
      console.log(resp);

    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    setValue('rating', rate)
  }, [rate])
  return (<>
    <ClassicHr />
    <form onSubmit={handleSubmit(onSubmit)} className='w-full  text-shadow pb-5 p-2 lg:px-10'>
      <Icon onClick={toggleClose} icon="ph:x" className='relative mb-2  lg:-right-7 cursor-pointer'>x</Icon>
      <div className='flex justify-start w-full'>
        <div className='flex items-center space-x-3 space-x-reverse'>

          <img className="rounded-full h-[50px] w-[50px] bg-gray-300  bg-contain p-1" src={user?.photoURL ?? avatarPlaceHolder} />
          <h2 className="text-lg">{user?.displayName}</h2>
        </div>



      </div>
      <textarea className='w-full my-2 p-1'
        {...register('body', {
          required: {
            value: true,
            message: 'לא ניתן לשלוח תגובה ריקה '
          },
          maxLength: {
            value: 200,
            message: "יותר מידי תווים בשדה זה "
          }
        })}

      ></textarea>
      <div dir='ltr' className='flex flex-row-reverse justify-between'>
        <div className="flex">
          <button type='button' onClick={() => setRate(1)}><Star active={rate >= 1} /></button>
          <button type='button' onClick={() => setRate(2)}><Star active={rate >= 2} /></button>
          <button type='button' onClick={() => setRate(3)}><Star active={rate >= 3} /></button>
          <button type='button' onClick={() => setRate(4)}><Star active={rate >= 4} /></button>
          <button type='button' onClick={() => setRate(5)}><Star active={rate >= 5} /></button>

        </div>
        < MainButtons submit custom=' flex items-center  px-2 py-0.5'>
          <Icon icon="bi:send-fill" className='mx-2 -rotate-90' />
          פרסמי
        </MainButtons>
      </div>
      <h6 className='w-full text-right text-[#B8B8B8]'>{currentDate()}</h6>

    </form>

  </>
  )
}

export default AddCommentForm