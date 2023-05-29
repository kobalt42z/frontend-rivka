import { Spinner } from 'flowbite-react';
import React, { MouseEventHandler, ReactNode } from 'react'


interface MainButtonsProps {
  ClickAction?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  submit?: boolean;
  custom?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;

}
const MainButtons = ({ ClickAction, children, custom, isLoading, submit , disabled}: MainButtonsProps) => {
  return (
    <button disabled={disabled||isLoading} onClick={ClickAction} type={'submit'??'button'} className={`capitalize bg-[var(--main-btn-color)] text-[#474A49] disabled:opacity-60 ${custom} `}>
      {isLoading ? <Spinner color="info" /> : children}
    </button>
    //  
  )
}

export default MainButtons