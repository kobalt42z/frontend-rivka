import React from 'react'
import CategoryTable from './CategoryTable'
import CategoryHeaderActions from './CategoryHeaderActions'
import CategoryTh from './CategoryTh'
import CategoryTb from './CategoryTb'
import { UseToggle } from 'sk-use-toggle/src'
import AddCategoryformUI from './Form/AddCategoryformUI'
import DelModal from '../../../components/Employee/modals/DelModal'

const BrowseCategory = () => {
    const [showAddCategory, toggleAddCategory] = UseToggle();
    
    const  CreateCategory =()=>{
        // create category hook here !
        toggleAddCategory();
    }
    
    
    return (<> {showAddCategory && <AddCategoryformUI save={CreateCategory} cancel={toggleAddCategory} />}
              
        <CategoryTable>
            <CategoryHeaderActions toggleAddCategory={toggleAddCategory}/>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <CategoryTh />
                <CategoryTb />
            </table>

        </CategoryTable>
    </>)
}

export default BrowseCategory