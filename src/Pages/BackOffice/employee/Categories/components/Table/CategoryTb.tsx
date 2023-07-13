import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import CategoryRow from './CategoryRow'
import { UseToggle, toggler } from 'sk-use-toggle/src';
import { categoryFromDb } from '../../../../../../interfaces';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../../../../../features/API/Category.Api';
import LoadingScreen from '../../../../../../components/Loading/LoadingScreen';
import DelModal from '../../../products/components/modals/DelModal';
import { dateFormatter } from '../../../../../../functions';


interface props {
    showAddCategory:toggler
    setEdit:Dispatch<SetStateAction<categoryFromDb | null>>
}
const CategoryTb:FC<props> = ({setEdit,showAddCategory}) => {
    const [showDelModal, toggleDelModal] = UseToggle();
    const { data, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()
    const [deleteCategory, { error: delError ,isLoading:isDelLoading}] = useDeleteCategoryMutation()
    const [delTarget, setDelTarget] = useState<string | null>(null)
    
    const initDeletion = (id: string) => {
        toggleDelModal();
        setDelTarget(id)
    }
    const approveDeletion = async () => {
        try {
            console.log('delet ' + delTarget);
            if (!delTarget) throw new Error("no Deltaget was found")
            await deleteCategory(delTarget)
            toggleDelModal()
        } catch (error) {
            throw error
        }

    }

    if (isError) console.error(error);
    

    return (isLoading || isDelLoading ? <LoadingScreen /> : <>

        <tbody>
        {showDelModal && <td><li><DelModal closeF={toggleDelModal} OnAccept={approveDeletion} delName='test' /></li></td>}
            {data && data.categories.map((category: categoryFromDb, i) => {
                return (<CategoryRow key={i}
                    initEdit={()=>{
                        setEdit(category)
                        showAddCategory()
                    }}
                    id={category.id}
                    categoryName={category.name}
                    description={category.description}
                    amountOfProducts={category._count?.products??5}
                    createdAt={dateFormatter(category.createdAt)}
                    lastUpdate={dateFormatter(category.updatedAt)}
                    imgURl={category.imgUrl}
                    toggleDeletion={initDeletion}
                />)
            })
            }
        </tbody>


    </>
    )
}

export default CategoryTb