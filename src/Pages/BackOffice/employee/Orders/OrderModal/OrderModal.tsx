import { Button, Modal } from 'flowbite-react'
import React, { FC } from 'react'
import { toggler } from 'sk-use-toggle/src'
import { Order } from '../../../../../interfaces/Order.interface'
import Innovice from './innovice'
interface props {
    toggle: toggler
    show: boolean
    data?:Order
}
export const OrderModal: FC<props> = ({ data,show,toggle}) => {
    return (
        <React.Fragment>

            <Modal
                size={'5xl'}
                show={show}
                onClose={toggle}
            >
                <Modal.Header>
                    חשבונית
                </Modal.Header>
                <Modal.Body>
                <Innovice data={data} paid />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggle} color={"success"}>
                        אישור הזמנה
                    </Button>
                    <Button
                        color="failure"
                        onClick={toggle}
                    >
                        סירוב
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
