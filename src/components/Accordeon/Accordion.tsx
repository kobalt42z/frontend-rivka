
import { Children, FC, useState } from 'react';
import ProductRow from '../Employee/ProductRowHead';
import AccordionBody from './AccordionBody';
import { AccordionTitle } from './AccordionTitle';

interface props {

    deleteClick: (id: string) => void;

}




const AccordionItem: FC<props> = ({ deleteClick }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <ProductRow
                onClick={() => setToggle(!toggle)}
                key={'iiiii'}
                handleDeletClick={deleteClick}
                id={'13542'}
            />
            {toggle &&
                <AccordionBody>
                    
                </AccordionBody>
            }
        </>
    )
}

export default AccordionItem