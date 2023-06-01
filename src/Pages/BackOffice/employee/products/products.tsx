import React, { useEffect, useState } from 'react'
import { productFromDB } from '../../../../interfaces'
import { useDeleteProductMutation, useFindALlProductQuery } from '../../../../features/API/Products.Api'
import AddProductsModal from './components/modals/AddProductsModal'
import { IF } from '../../../../components/special/if'
import ProductsTable from './table/ProductsTable'
import DelModal from './components/modals/DelModal'
import DropDownRow from './table/DropDownRow'
import LoadingScreen from '../../../../components/Loading/LoadingScreen'
import BasicModal from '../../../../components/Modals/BasicModal'
import BasicStep from './components/CRUD_forms/create/BasicStep'
import TranslationForm from './components/CRUD_forms/create/TranslationForm'
import SpecificationForm from './components/CRUD_forms/create/SpecificationForm'
import { motion } from "framer-motion"
import CreateProductForm from './components/CRUD_forms/create/CreateProductForm'
import TranslationStep from './components/CRUD_forms/create/TranslationStep'
import { languages } from '../../../../interfaces/product.interface'
import SpecificationStep from './components/CRUD_forms/create/specificationStep'



const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [ToDel, setToDel] = useState<{ id: string, name: string } | null>(null)

    const [selectedRow, setSelectedRow] = useState<{}[] | null>(null)
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [ToEditProduct, setToEditProduct] = useState<productFromDB | null>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const { isLoading, isFetching, isError, isSuccess, error, data } = useFindALlProductQuery(currentPage);

    const [deletProduct, { }] = useDeleteProductMutation()

    const cancel = () => {
        setShowConfirmDel(false)
    }

    const editProduct = (data: productFromDB) => {
        // console.log(data);
        setShowAddProduct(true);
        setToEditProduct(data);
    }
    const deletClick = (arg: { id: string, name: string }) => {
        setToDel(arg);
        setShowConfirmDel(true);
    }
    const deletItem = async () => {
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
        setToEditProduct(null);
    }








    return (
        <>
            {!isLoading &&
                <div >
                    
                    <IF condition={showAddProduct}>
                        {/* <AddProductsModal closeAddProduct={closeAddProduct} editValues={ToEditProduct} /> */}
                        <BasicModal title='הוספת מוצר' toggleClose={closeAddProduct}>
                            {/* <BasicStep /> */}
                            {/* <TranslationForm index={0} language='Francais'/> */}
                            {/* <SpecificationForm index={0} /> */}
                            <SpecificationStep />
                            {/* <CreateProductForm/> */}
                            {/* <TranslationStep languages={[languages.fr,languages.en]}/>
                             */}
                        </BasicModal>
                    </IF>
                    <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} delName={ToDel?.name} /></IF>
                    <ProductsTable toggleAddProducts={addProduct}>


                        {isSuccess && data && data.products.map((product: productFromDB, i: number) => {
                            return (
                                <DropDownRow key={i} deleteClick={deletClick} data={product} editFunc={editProduct} />
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