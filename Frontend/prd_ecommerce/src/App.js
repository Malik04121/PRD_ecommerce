import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Box } from '@chakra-ui/layout';
import { MainRoute } from './Component/route/Route';
import { Cart } from './Pages/Cart/cart';
import Footer from './Component/Footer/footer';
import { Admin } from './Pages/Admin/admin';

function App() {
  return (
   <Box >
   {/* <Navbar/> */}
   <MainRoute/>
   {/* <Footer/> */}
   {/* <Admin/> */}
   </Box>
  );
}

export default App;
