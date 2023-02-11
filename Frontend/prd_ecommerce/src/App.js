import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
// import { Subnavbar } from './Component/Subnavbar';
// import { Landingpage } from './Component/Landingpage/Landingpage';
// import { Route } from 'react-router';

import { Box } from '@chakra-ui/layout';
import { MainRoute } from './Component/Route';
import { Cart } from './Pages/Cart/cart';
import Footer from './Component/Footer/footer';

function App() {
  return (
   <Box >
   <Navbar/>
   {/* <Cart/> */}
   {/* <Subnavbar/> */}
   {/* <Landingpage/> */}
   <MainRoute/>
   <Footer/>
   </Box>
  );
}
// {
//   "name": "",
//   "image1": "",
//   "price":,
//   "rating": 4.7,
//   "brand": "Hp",
//   "category": "Windows"
// }
export default App;
