import React from 'react'

export const MainFooter = () => {
    return (
        <div className='container min-h-[25vh] '>
            <div className="SocialIcons flex justify-center  space-x-3  my-5">
                <i className={`bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png')] w-[40px] h-[40px] bg-contain`}></i>
              <div className='bg-white w-[40px] h-[40px] rounded-xl'>
                  <div className={`bg-[url('https://cdn-icons-png.flaticon.com/512/174/174848.png')] bg-contain h-[40px]`}></div>
              </div>
                <i className={`bg-[url('https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360')] w-[40px] h-[40px] bg-contain rounded-xl`}></i>
            
            </div>
            <p className='text-center text-xs  text-black font-semibold  pb-[40px]'>
                Powered by Chmouel Kessous, Designed by Rebecca Salmanowitz
                @All rights reserved to Rivka Nakache Cosmetics
            </p>
        </div>
    )
}
