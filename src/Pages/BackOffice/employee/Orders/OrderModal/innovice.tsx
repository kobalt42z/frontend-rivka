import React, { FC } from 'react'
import Logo from '../../../../../assets/RivkaLogoTrans.png'
import { Order } from '../../../../../interfaces/Order.interface'
import { dateFormatter } from '../../../../../functions'

interface props {
    paid?: boolean,
    data?: Order
}
const Innovice: FC<props> = ({ paid, data }) => {
    if (!data) return (<>error</>)
    return (
        <section className="bg-gray-200 print:bg-white md:flex lg:flex xl:flex print:flex md:justify-center lg:justify-center xl:justify-center print:justify-center ">
            <div className="lg:w-1/12 xl:w-1/4"></div>
            <div className="w-full bg-white lg:w-full xl:w-2/3 lg:mt-20 lg:mb-20 lg:shadow-xl xl:mt-02 xl:mb-20 xl:shadow-xl print:transform print:scale-90">
                <header className={`flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 ${paid ? "border-green-700" : "border-red-700"} md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative`}>
                    <img className="w-3/6 h-auto md:w-1/4 lg:ml-12 xl:ml-12 print:px-0 print:py-0" src={Logo} />
                    <div dir='' className="flex flex-row-reverse jus mt-12 mb-2 ml-0 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl print:text-2xl lg:ml-12 xl:ml-12">חשבונית
                        <div className={`text-green-700`}>
                            <span className="mr-4 text-sm">■ </span> #
                        </div>
                        <span id="invoice_id" className="text-gray-500">{data.id}</span>
                    </div>
                    <div dir='rtl' className="flex text-start pt-2 px-5 flex-col lg:ml-12 xl:ml-12 print:text-sm">
                        <span>תאריך קנייה: {dateFormatter(data.createdAt)}</span>
                        <span>שולם ב-: 2020/09/07</span>
                        {/* <span>Due date: 2020.10.06</span> */}
                    </div>
                    <div className={`px-8 py-2 mt-16 text-3xl font-bold ${paid ? "text-green-700 border-4 border-green-700" : "text-red-700 border-4 border-red-700"} border-dotted md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8`}>{paid ? "שולם" : "לא שולם"}</div>
                    <section dir='' className="flex flex-col m-12 text-center lg:m-12 md:flex-none md:text-left md:relative md:m-0 md:mt-16 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative print:flex-none print:text-left print:relative print:m-0 print:mt-6 print:text-sm">
                        <span className="font-extrabold md:hidden lg:hidden xl:hidden print:hidden">FROM</span>
                        <section className="flex flex-col">
                            <span id="company-name" className="font-medium">רבקה נקש</span>
                            <span id="company-country"><span className="flag-icon flag-icon-us"></span> ישראל</span>
                            <div className="flex-row">
                                <span id="c-city">ירושלים</span>,
                                {/* <span id="c-postal">NY 10023</span> */}
                            </div>
                            <span id="company-address">שכונת בית וגן</span>
                            <span id="company-phone">+12124567777</span>
                            <span id="company-mail">rivkaNackach@gmail.com</span>
                        </section>
                        <span className="mt-12 font-extrabold md:hidden lg:hidden xl:hidden print:hidden">TO</span>
                        <section className="flex flex-col md:absolute md:right-0 md:text-right lg:absolute lg:right-0 lg:text-right print:absolute print:right-0 print:text-right">
                            <span id="person-name" className="font-medium">{data.user.fullName}</span>
                            <span id="person-country"><span className="flag-icon flag-icon-hu"></span> ישראל</span>
                            {/* <div className="flex-row">
                                <span id="p-postal">3100</span>
                                <span id="p-city">Salgótarján</span>,
                            </div>
                            <span id="person-address">Rákóczi út 12.</span> */}
                            <span id="person-phone">{data.user.phone}</span>
                            <span id="person-mail">{data.user.email}</span>
                        </section>
                    </section>
                </header>
                <hr className="border-gray-300 md:mt-8 print:hidden" />
                <section>
                    <div id="content" className="flex justify-center md:p-8 lg:p-20 xl:p-20 print:p-2">
                        <table dir='rtl' className="w-full text-right table-auto print:text-sm" id="table-items">
                            <thead>
                                <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                                    <th className="px-4 py-2">מוצר</th>
                                    <th className="px-4 py-2 text-right">כמות</th>
                                    <th className="px-4 py-2 text-right"> מחיר ליחידה</th>
                                    <th className="px-4 py-2 text-right">סהכ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.cart.cartProducts.map((item, i) => {
                                    return (
                                        <tr>
                                            <td className="px-4 py-2 border">{item.product.name +"- "+ item.product.description}</td>
                                            <td className="px-4 py-2 text-right border tabular-nums slashed-zero">{item.count}</td>
                                            <td className="px-4 py-2 text-right border tabular-nums slashed-zero">₪{item.product.selling_price}</td>
                                            <td className="px-4 py-2 text-right border tabular-nums slashed-zero">₪{item.product.selling_price *item.count }</td>
                                        </tr>
                                    )

                                })}
                                {/* <tr className="bg-gray-100 print:bg-gray-100">
                                    <td className="px-4 py-2 border">Domain Registration - coolstory.bro - (100% Free for First Year)</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$12.00</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$0.00</td>
                                </tr> */}
                                {/* <tr>
                                    <td className="px-4 py-2 border">
                                        Dedicated Server - Eco Boost
                                        <div className="flex flex-col ml-4 text-xs print:hidden">
                                            <span className="flex items-center">Intel® Xeon® Processor E5-1607 v3</span>
                                            <span className="uppercase">32GB DDR4 RAM</span>
                                            <span>1TB NVMe / Raid 1+0</span>
                                            <span>1Gbps Network + CloudFlare DDoS protection</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$214.99</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$214.99</td>
                                </tr> */}
                                {/* <tr className="bg-gray-100 print:bg-gray-100">
                                    <td className="px-4 py-2 border ">
                                        Dedicated Server - V8 Turbo
                                        <div className="flex flex-col ml-4 text-xs print:hidden">
                                            <span className="flex items-center">AMD EPYC™ 7702P</span>
                                            <span className="uppercase">128GB DDR4 RAM</span>
                                            <span>512GB NVMe / Raid 5</span>
                                            <span>100Mbit Network + CloudFlare DDoS protection</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">1</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$322.45</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$322.45</td>
                                </tr> */}
                                <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black" >
                                    <td className="invisible"></td>
                                    <td className="invisible"></td>
                                    <td className="px-4 py-2 text-right border"><span className="flag-icon flag-icon-hu print:hidden"></span> מע"מ</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">18%</td>
                                </tr>
                                {/* <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black" >
                                    <td className="invisible"></td>
                                    <td className="invisible"></td>
                                    <td className="px-4 py-2 text-right border">TAX</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">$145.77</td>
                                </tr> */}
                                <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black" >
                                    <td className="invisible"></td>
                                    <td className="invisible"></td>
                                    <td className="px-4 py-2 font-extrabold text-right border">סה"כ לתשלום</td>
                                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">₪{data.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* <payment-history>
      <div className="mt-20 mb-20 print:mb-2 print:mt-2">
        <h2 className="text-xl font-semibold text-center print:text-sm">Payment History</h2>
        <div className="flex flex-col items-center text-center print:text-sm">
        <p className="font-medium">  2020/09/06 06:43PM CET <span className="font-light"><i className="lab la-cc-mastercard la-lg"></i> Credit Card Payment: $685.66 (Mastercard XXXX-XXXX-XXXX-0122)</span></p>
      </div>

     </div>
    </payment-history> */}
                {/* <div className="flex flex-col items-center mb-24 leading-relaxed print:mt-0 print:mb-0">
                    <span className="w-64 text-4xl text-center text-black border-b-2 border-black border-dotted opacity-75 sign print:text-lg">Csendes</span>
                    <span className="text-center">Buyer</span>
                </div> */}
                <footer className="flex flex-col items-center justify-center pb-20 leading-loose text-white bg-gray-700 print:bg-white print:pb-0">
                    <span className="mt-4 text-xs print:mt-0">חשבונית זו נוצרה ב-{dateFormatter(data.createdAt)} </span>
                    <span dir='rtl' className="mt-4 text-base print:text-xs">© 2023 רבקה נקש.  כל הזכויות שמורות.</span>
                    <span dir='rtl' className="print:text-xs">ישראל - ירושלים,בית וגן</span>
                </footer>
            </div>
            <div className="lg:w-1/12 xl:w-1/4"></div>
        </section>
    )
}

export default Innovice