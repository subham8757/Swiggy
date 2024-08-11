
import './App.css';
import FoodCategories from './Components/FoodCategories';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import TopRestro from './Components/TopRestro';

function App() {
  return (
      <>
        <Navbar/>
        <FoodCategories/>
        <TopRestro/>
        <Main/>
        <Footer/>
       
      </>
  );
}

export default App;
