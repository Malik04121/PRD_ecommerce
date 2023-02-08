import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
// import { Subnavbar } from './Component/Subnavbar';
// import { Landingpage } from './Component/Landingpage/Landingpage';
// import { Route } from 'react-router';

import { Box } from '@chakra-ui/layout';
import { MainRoute } from './Component/Route';

function App() {
  return (
   <Box className="body">
   <Navbar/>
   {/* <Subnavbar/> */}
   {/* <Landingpage/> */}
   <MainRoute/>
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
