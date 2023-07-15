import { Table } from 'flowbite-react'
import React, { useState } from 'react'
import { OrderModal } from './OrderModal/OrderModal'
import { UseToggle } from 'sk-use-toggle/src';
import { useGetOrdersQuery } from '../../../../features/API/Orders.Api';
import LoadingScreen from '../../../../components/Loading/LoadingScreen';
import { Order } from '../../../../interfaces/Order.interface';

export const OrdersTable = () => {
    const [showModal, toggleModal] = UseToggle();
    const [SelectedOrder, setSelectedOrder] = useState<Order>()
    const { isError, isLoading, isSuccess, data, error } = useGetOrdersQuery(undefined)
    const showOrderModal =(data:Order)=>{
        setSelectedOrder(data)
        toggleModal();
    }
    use
    return (

        <div className='container'>
            {isLoading && <LoadingScreen />}
            <OrderModal show={showModal} toggle={toggleModal} data={SelectedOrder} />
            <Table hoverable={true} dir='rtl'>
                <Table.Head>
                    <Table.HeadCell>
                        שם מלא
                    </Table.HeadCell>
                    <Table.HeadCell>
                        מייל
                    </Table.HeadCell>
                    <Table.HeadCell>
                        טלפון
                    </Table.HeadCell>
                    <Table.HeadCell>
                        סכום הזמנה בשח
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="">
                            צפייה בפרטי הזמנה
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {isSuccess && data && data.map((order, i) => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {order.user.fullName}
                                </Table.Cell>
                                <Table.Cell>
                                    {order.user.email}
                                </Table.Cell>
                                <Table.Cell dir='ltr'>
                                    {order.user.phone}
                                </Table.Cell>
                                <Table.Cell>
                                    {order.totalPrice}
                                </Table.Cell>
                                <Table.Cell>
                                    <button
                                        onClick={()=>showOrderModal(order)}
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        הצג הזמנה
                                    </button>
                                </Table.Cell>
                            </Table.Row>

                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
