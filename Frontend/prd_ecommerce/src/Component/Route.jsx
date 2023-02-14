// import { Routes } from "react-router"
// import { Landingpage } from "../Component/Landingpage/Landingpage"
import { Route, Routes } from "react-router-dom";
import {Login} from "../Pages/Register/Loginpage"
import { Register } from "../Pages/Register/Register";
import {Landingpage} from "../Pages/Landingpage/Landingpage"
import {LaptopProduct} from "../Pages/category_Page/laptop_product/laptopproduct"
import {MobileProduct} from "../Pages/category_Page/Mobile_product/Mobile"
import Product from "../Pages/product_page/product";
import { Cart } from "../Pages/Cart/cart";
import { TVProduct } from "../Pages/category_Page/TV_product/TV";
import { ACProduct } from "../Pages/category_Page/AC_product/AC";
import { WMProduct } from "../Pages/category_Page/washingMachine_product/WashingMachine";


function MainRoute(){

return(
    <>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/laptop" element={<LaptopProduct/>}/>
        <Route path="/mobile" element={<MobileProduct/>}/>
        <Route path="/Television" element={<TVProduct/>}/>
        <Route path="/Ac" element={<ACProduct/>}/>
        <Route path="/WashingMachine" element={<WMProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:param/:para" element={<Product/>}/>
        

    </Routes>
    </>
)

}
export {MainRoute}