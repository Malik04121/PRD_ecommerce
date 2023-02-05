// import { Routes } from "react-router"
import { Landingpage } from "../Component/Landingpage/Landingpage"
import { Route, Routes } from "react-router-dom";
import { Login } from "../Component/Register/Loginpage";
import { Register } from "../Component/Register/Register";
import { LaptopProduct } from "../Component/Product_Page/laptop_product/laptopproduct";
import { MobileProduct } from "../Component/Product_Page/Mobile_product/Mobile";


function MainRoute(){

return(
    <>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/laptop" element={<LaptopProduct/>}/>
        <Route path="/mobile" element={<MobileProduct/>}/>
        

    </Routes>
    </>
)

}
export {MainRoute}