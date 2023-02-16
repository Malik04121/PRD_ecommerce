import { useToast } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const CartAuth=({children})=>{
  const isAuth=useSelector((store)=>store.isAuth)
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
export default CartAuth