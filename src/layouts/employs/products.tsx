import React, { useEffect, useState } from 'react'
import { GETproducts } from '../../API/Products/GET.products'
import AccordionItem from '../../components/Accordeon/Accordion'
import AccordionBody from '../../components/Accordeon/AccordionBody'
import { AccordionTitle } from '../../components/Accordeon/AccordionTitle'
import DropDownRow from '../../components/Employee/DropDownRow'

import AddProductsModal from '../../components/Employee/modals/AddProductsModal'
import DelModal from '../../components/Employee/modals/DelModal'
import ProductRow from '../../components/Employee/ProductRowHead'
import ProductsTable from '../../components/Employee/ProductsTable'
import SuppThead from '../../components/Employee/SuppThead'
import LoadingScreen from '../../components/Loading/LoadingScreen'
import { IF } from '../../components/special/if'
import { useFindALlQuery } from '../../features/API/Products.Api'
import {  productFromDB, productResponse } from '../../interfaces'


const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [idToDel, setIdToDel] = useState<string | null>(null)
    const [selectedRow, setSelectedRow] = useState<{}[] | null>(null)
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [ToEditProduct, setToEditProduct] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const { isLoading, isFetching, isError, isSuccess, error, data } = useFindALlQuery(currentPage);

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
        <>
            {!isLoading && <div className='min-h-[85vh]'>
                <IF condition={showAddProduct}>
                    <AddProductsModal closeAddProduct={closeAddProduct} /></IF>
                <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} /></IF>
                <ProductsTable toggleAddProducts={addProduct}>


                    {isSuccess && data && data.products.map((product: productFromDB, i: number) => {
                        return (
                            <DropDownRow key={i} deleteClick={deletClick} data={product} />
                        )
                    })
                    }



                </ProductsTable>
            </div>}
            {isLoading && <LoadingScreen />}
        </>
    )
}

export default Products