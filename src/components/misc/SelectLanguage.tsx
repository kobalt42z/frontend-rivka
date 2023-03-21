import React, { FC } from 'react'
import { languages } from '../../interfaces';

interface props{
    className ?: string
    onChange:(selected:string)=>void;
}
const SelectLanguage:FC<props> = ({onChange,className}) => {
    
    return (
        <select className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${className && className}`}
        onChange={(val)=>onChange(val.target.value)}
        >
            <option selected value={languages.he}>עברית</option>
            <option value={languages.fr}>Francais</option>
            <option value={languages.en}>English</option>
        </select>
    )
}

export default SelectLanguage