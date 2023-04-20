
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Forgot, LoginPage, NotFound, SharedLayouts } from "../layouts";
import Home from "../layouts/Home";
import Register from "../layouts/auth/Register";
import Shop from "../layouts/Shop";
import Products from "../layouts/employs/products";
import Admin from "../Guards/Admin";
import AdminSharedLayout from "../layouts/Admin/AdminSharedLayout";
import Loader from "../components/misc/Loader";
import BrowseCategory from "../layouts/employs/Categories/BrowseCategory";


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