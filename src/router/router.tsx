
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Loader from "../components/misc/Loader";
import { SharedLayouts } from "../Pages/Public/SharedLayouts/SharedLayouts";
import Home from "../Pages/Public/Home/Home";
import Shop from "../Pages/Public/shop/Shop";
import Register from "../Pages/Public/auth/Register";
import { LoginPage } from "../Pages/Public/auth/LoginPage";
import { Forgot } from "../Pages/Public/auth/Forgot";
import AdminSharedLayout from "../Pages/BackOffice/Admin/AdminSharedLayout";
import BrowseCategory from "../Pages/BackOffice/employee/Categories/BrowseCategory";
import Products from "../Pages/BackOffice/employee/products/products";
import { NotFound } from "../Pages/404/NotFound";
import { BOsharedLayoutes } from "../Pages/BackOffice/sharedLayouts/BOsharedLayoutes";
import { OrdersTable } from "../Pages/BackOffice/employee/Orders/ordersTable";
import { ProductPage } from "../Pages/Public/shop/components/productPage/product";
import { MyCart } from "../Pages/Public/shop/components/Cart/MyCart";
import CartStepper from "../Pages/Public/shop/components/Cart/components/CartStepper";
import PaymentPage from "../Pages/Public/shop/paymentPage/PaymentPage";
import UserGuard from "../Guards/User";
import ItemGrid from "../Pages/Public/shop/ItemGrid";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            {/* PUBLIC ROUTES */}


            <Route path='/login' element={<LoginPage registerUrl="/register" forgotUrl="/forgot" />} />

            <Route path="/" element={
                <UserGuard >
                    <SharedLayouts />
                </UserGuard>
            } >
                <Route index element={<Home />} />
                <Route path="/shop/" element={<Shop />} >
                    <Route path="/shop/:category" element={<ItemGrid />} />
                </Route>
                <Route path='/register' element={<Register loginUrl="/login" />} />
                <Route path='/forgot' element={<Forgot loginUrl="/login" />} />
                {/* <Route path='/product/:id' element={<ProductPage />} />   */}
                <Route path='/product/' element={<ProductPage />} />
                <Route path="/myCart/" element={<UserGuard><CartStepper /></UserGuard>}>
                    <Route index element={<MyCart />} />
                    <Route path="/myCart/login/" element={<LoginPage registerUrl="/myCart/register" forgotUrl="/myCart/forgot/" />} />
                    <Route path="/myCart/register/" element={<Register loginUrl="/myCart/login" />} />
                    <Route path="/myCart/forgot/" element={<Forgot loginUrl="/myCart/login" />} />
                    <Route path="/myCart/payment/" element={<PaymentPage />} />
                    <Route path="/myCart/inovice/" element={<MyCart />} />
                </Route>


            </Route>
            {/* BACKOFFICE  ROUTES  */}
            <Route path='/admin' element={<BOsharedLayoutes />} >
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/categories" element={<BrowseCategory />} />
                <Route path="/admin/orders" element={<OrdersTable />} />

            </Route>
            <Route path="/employes" element={<NotFound />} />


            <Route path="*" element={<NotFound />} />
        </Route>
    )
);