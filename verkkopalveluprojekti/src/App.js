import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './inc/NavBar';
import Footer from './inc/Footer';
import Home from './Home';
import AboutUs from './AboutUs';

function App() {
  return (
    <>
    <NavBar />
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
