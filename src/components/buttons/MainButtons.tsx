import { Spinner } from 'flowbite-react';
import React, { MouseEventHandler, ReactNode } from 'react'


interface MainButtonsProps {
  ClickAction?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  custom?: string;
  isLoading?: boolean;
  onClick?: (event: MouseEvent) => void;

}
const MainButtons = ({ ClickAction, children, custom, isLoading }: MainButtonsProps) => {
  return (
    <button onClick={ClickAction} className={`capitalize bg-[var(--main-btn-color)] w-[85px] h-[35px] text-[#474A49] ${custom}`}>
      {isLoading ? <Spinner color="info" /> : children}
    </button>
  )
}

export default MainButtons