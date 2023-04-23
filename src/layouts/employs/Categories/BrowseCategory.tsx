import React, { useEffect, useState } from 'react'
import CategoryTable from './CategoryTable'
import CategoryHeaderActions from './CategoryHeaderActions'
import CategoryTh from './CategoryTh'
import CategoryTb from './CategoryTb'
import { UseToggle } from 'sk-use-toggle/src'
import AddCategoryformUI from './Form/AddCategoryformUI'
import DelModal from '../../../components/Employee/modals/DelModal'
import { categoryFromDb } from '../../../interfaces'

const BrowseCategory = () => {
    const [showAddCategory, toggleAddCategory] = UseToggle();
    const [editTarget, setEditTarget] = useState<categoryFromDb|null>(null);


// useEffect(()=>{
//     console.log(editTarget);
    
// },[editTarget])
    return (<> {showAddCategory && <AddCategoryformUI toggleModal={toggleAddCategory} editTarget={editTarget} ClearEdit={setEditTarget}  />}

        <CategoryTable>
            <CategoryHeaderActions toggleAddCategory={toggleAddCategory} />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <CategoryTh />
                <CategoryTb showAddCategory={toggleAddCategory} setEdit={setEditTarget} />
            </table>

        </CategoryTable>
    </>)
}

export default BrowseCategory