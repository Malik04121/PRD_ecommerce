import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"
import { Navbar } from "../Navbar"


function Layout(){
return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
)

}
export {Layout}