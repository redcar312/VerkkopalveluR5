import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './inc/NavBar';
import Footer from './inc/Footer';
import Home from './Home';
import AboutUs from './AboutUs';

const URL = "http://localhost/verkkopalveluprojekti_ryhma_5/";

function App() {
  return (
    <>
    <NavBar url={URL} />
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
