import React, { MouseEventHandler, ReactNode } from 'react'


interface MainButtonsProps {
  ClickAction ?:MouseEventHandler<HTMLButtonElement>;
  children: ReactNode ;
  custom :string;

}
const MainButtons = ({ ClickAction, children, custom }: MainButtonsProps) => {
  return (
    <button onClick={ClickAction} className={`capitalize bg-[var(--main-btn-color)] rounded-2xl py-1  ${custom}`}>
      {children}
    </button>
  )
}

export default MainButtons