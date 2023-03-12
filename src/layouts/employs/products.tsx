import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import DelModal from '../../components/Employee/modals/DelModal'

import ProductRow from '../../components/Employee/ProductRow'
import ProductsTable from '../../components/Employee/ProductsTable'
import SuppThead from '../../components/Employee/SuppThead'
import { IF } from '../../components/special/if'

const Products = () => {
    const [showConfirmDel, setShowConfirmDel] = useState(false)
    const [idToDel, setIdToDel] = useState<string | null>(null)
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

    



    return (
        <div>
            <IF condition={showConfirmDel}><DelModal closeF={cancel} OnAccept={deletItem} /></IF>
            <ProductsTable>
                {items.map((item, i) => <ProductRow key={i} handleDeletClick={deletClick} id={item.id} />)}

            </ProductsTable>
        </div>
    )
}

export default Products