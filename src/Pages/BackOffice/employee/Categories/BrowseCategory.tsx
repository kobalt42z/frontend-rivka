import React, { useEffect, useState } from 'react'
import { UseToggle } from 'sk-use-toggle/src';
import { categoryFromDb } from '../../../../interfaces';
import AddCategoryformUI from './components/Form/AddCategoryformUI';
import CategoryTable from './components/Table/CategoryTable';
import CategoryHeaderActions from './components/Table/CategoryHeaderActions';
import CategoryTh from './components/Table/CategoryTh';
import CategoryTb from './components/Table/CategoryTb';


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