
import './App.css';
import { Categories } from './Components/Categories/Categories';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';
import { Static } from './Components/Static/Static';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Static/>
       <div className="categoriesContainer">
            <Categories/>
            <Products/>
       </div>
        <Footer/>
    </div>
  );
}

export default App;
