import React from 'react'


const SelectLanguage = ({ InjectClass }:{InjectClass ?:string}) => {
    
    return (
        <select className={`bg-transparent border-0 border-b-2 focus:outline-none focus:border-t-0 ${InjectClass && InjectClass}`} >
            <option value="he" >עברית</option>
            <option value="fr">Francais</option>
            <option value="en">English</option>
        </select>
    )
}

export default SelectLanguage