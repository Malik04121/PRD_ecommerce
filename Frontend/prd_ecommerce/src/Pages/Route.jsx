// import { Routes } from "react-router"
import { Landingpage } from "../Component/Landingpage/Landingpage"
import { Route, Routes } from "react-router-dom";
import { Login } from "../Component/Register/Loginpage";
import { Register } from "../Component/Register/Register";


function MainRoute(){

return(
    <>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

    </Routes>
    </>
)

}
export {MainRoute}