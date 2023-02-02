import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Subnavbar } from './Component/Subnavbar';
import { Landingpage } from './Component/Landingpage/Landingpage';

function App() {
  return (
   <>
   <Navbar/>
   <Subnavbar/>
   <Landingpage/>
   </>
  );
}

export default App;
