
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


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Loader><SharedLayouts /></Loader>} >
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot' element={<Forgot />} />  

            </Route>
            <Route path='/admin' element={<AdminSharedLayout/>} >
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/categories" element={<BrowseCategory/>} />

            </Route>
            <Route path="/employes" element={<NotFound />} />


            <Route path="*" element={<NotFound />} />
        </Route>
    )
);