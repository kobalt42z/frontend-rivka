import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import AddProductsModal from '../../components/Employee/modals/AddProductsModal'
import DelModal from '../../components/Employee/modals/DelModal'
import ProductRow from '../../components/Employee/ProductRow'
import ProductsTable from '../../components/Employee/ProductsTable'
import SuppThead from '../../components/Employee/SuppThead'
import { IF } from '../../components/special/if'

const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [idToDel, setIdToDel] = useState<string | null>(null)
    const [selectedRow, setSelectedRow] = useState<{}[] | null>(null)

    //! testing purposes only!
    const [items, setItems] = useState([{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }, { id: "e" }])

    const cancel = () => {
        setShowConfirmDel(false)
    }

    const deletClick = (id: string) => {
        setIdToDel(id);
        setShowConfirmDel(true);

    }
    const deletItem = () => {

        console.log("delet logic here !" + idToDel);
        setShowConfirmDel(false)
    }

    const selectAll = () => {
        setSelectedRow(items);
    }




    return (
        <div>
            <AddProductsModal/>
            <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} /></IF>
            <ProductsTable>
                {items.map((item, i) => <ProductRow key={i} handleDeletClick={deletClick} id={item.id} />)}
            </ProductsTable>
        </div>
    )
}

export default Products