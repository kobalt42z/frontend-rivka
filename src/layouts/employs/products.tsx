
import React, { useEffect, useState } from 'react'
import AccordionItem from '../../components/Accordeon/Accordion'
import AccordionBody from '../../components/Accordeon/AccordionBody'
import { AccordionTitle } from '../../components/Accordeon/AccordionTitle'
import DropDownRow from '../../components/Employee/dropDownRow'
import AddProductsModal from '../../components/Employee/modals/AddProductsModal'
import DelModal from '../../components/Employee/modals/DelModal'
import ProductRow from '../../components/Employee/ProductRowHead'
import ProductsTable from '../../components/Employee/ProductsTable'
import SuppThead from '../../components/Employee/SuppThead'
import { IF } from '../../components/special/if'

const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [idToDel, setIdToDel] = useState<string | null>(null)
    const [selectedRow, setSelectedRow] = useState<{}[] | null>(null)
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [ToEditProduct, setToEditProduct] = useState<string | null>(null)

    

    const cancel = () => {
        setShowConfirmDel(false)
    }

    const onEditClick = (id: string) => {
        setToEditProduct(id);
        setShowEditProduct(true);
    }
    const editProduct = () => {
        console.log(ToEditProduct);
        // edit req logic here!

    }

    const deletClick = (id: string) => {
        setIdToDel(id);
        setShowConfirmDel(true);

    }
    const deletItem = () => {

        console.log("delet logic here !" + idToDel);
        setShowConfirmDel(false)
    }

    

    const addProduct = () => {
        setShowAddProduct(true);
    }
    const closeAddProduct = () => {
        setShowAddProduct(false);
    }


    return (
        <div>
            <IF condition={showAddProduct}><AddProductsModal closeAddProduct={closeAddProduct} /></IF>
            <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} /></IF>
            <ProductsTable toggleAddProducts={addProduct}>

                
                    
            <DropDownRow deleteClick={deletClick}/>
            <DropDownRow deleteClick={deletClick}/>
            <DropDownRow deleteClick={deletClick}/>
            <DropDownRow deleteClick={deletClick}/>
               
                

            </ProductsTable>
        </div>
    )
}

export default Products