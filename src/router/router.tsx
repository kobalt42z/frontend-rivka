
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Forgot, LoginPage, NotFound, SharedLayouts } from "../layouts";
import Home from "../layouts/Home";
import Register from "../layouts/auth/Register";
import Shop from "../layouts/Shop";
import Products from "../layouts/employs/products";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<SharedLayouts />} >
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot' element={<Forgot />} />
            </Route>
            <Route path="/employes" element={<NotFound />} />
            <Route path="/products" element={<Products/>} />


            <Route path="*" element={<NotFound />} />
        </Route>
    )
);