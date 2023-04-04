import React, { useEffect, useState } from 'react'

import DropDownRow from '../../components/Employee/DropDownRow'
import AddProductsModal from '../../components/Employee/modals/AddProductsModal'
import DelModal from '../../components/Employee/modals/DelModal'
import ProductsTable from '../../components/Employee/ProductsTable'
import LoadingScreen from '../../components/Loading/LoadingScreen'
import { IF } from '../../components/special/if'
import { useDeleteProductMutation, useFindALlProductQuery } from '../../features/API/Products.Api'
import { productFromDB, productResponse } from '../../interfaces'


const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [ToDel, setToDel] = useState<{id:string,name:string}| null>(null)
    
    const [selectedRow, setSelectedRow] = useState<{}[] | null>(null)
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [ToEditProduct, setToEditProduct] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const { isLoading, isFetching, isError, isSuccess, error, data } = useFindALlProductQuery(currentPage);

    const [deletProduct,{}] = useDeleteProductMutation()

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
    const deletClick = (arg:{id: string,name:string}) => {
        setToDel(arg);
        setShowConfirmDel(true);
    }
    const deletItem = async() => {
        try {
            console.log("delet logic here !" + ToDel);
            ToDel && await deletProduct(ToDel.id).unwrap()
            setShowConfirmDel(false)
        } catch (error) {
            console.error(error);
        }
       
    }
    const addProduct = () => {
        setShowAddProduct(true);
    }
    const closeAddProduct = () => {
        setShowAddProduct(false);
    }








    return (
        <>
            {!isLoading && <div>
                <IF condition={showAddProduct}>
                    <AddProductsModal closeAddProduct={closeAddProduct} /></IF>
                <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} delName={ToDel?.name} /></IF>
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