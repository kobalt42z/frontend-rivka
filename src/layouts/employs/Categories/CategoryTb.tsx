import React from 'react'
import CategoryRow from './CategoryRow'
import { UseToggle } from 'sk-use-toggle/src';
import DelModal from '../../../components/Employee/modals/DelModal';

const CategoryTb = () => {
    const [showDelModal, toggleDelModal] = UseToggle();

    return (<>
     { showDelModal && <DelModal closeF={toggleDelModal} OnAccept={toggleDelModal} delName='test'/>}
        <tbody>
            <CategoryRow
                categoryName=' קרמים'
                description='תאור קרמים'
                amountOfProducts={50}
                createdAt='26-02-2023'
                lastUpdate='27-02-2023'
                imgURl='https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=605'
                toggleDeletion={toggleDelModal}
            />
        </tbody>
    </>
    )
}

export default CategoryTb