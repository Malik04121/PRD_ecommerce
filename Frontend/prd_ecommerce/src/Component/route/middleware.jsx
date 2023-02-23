import { useToast } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const CartAuth=({children})=>{
  const isAuth=useSelector((store)=>store.authReducer.isAuth)
  const toast=useToast()
    

  if(isAuth==false){
    toast({
        position : 'top',
        colorScheme : 'red', 
        status : "success",
        title:"User is not Logged In please Login first"
      })
    return <Navigate to="/login" replace={true}/>
  }
    return children

}

const AdminAuth=({children})=>{
  const token2=useSelector((store)=>store.menuReducer.token2)
  const toast=useToast()
    

  if(!token2){
    toast({
        position : 'top',
        colorScheme : 'red', 
        status : "success",
        title:"Admin is not Logged In please Login first"
      })
    return <Navigate to="/admin/login" replace={true}/>
  }
    return children

}
export {AdminAuth,CartAuth}