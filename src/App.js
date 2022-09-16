import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from "react-particles-js";

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experiance from './components/Experiance';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Experiance />
    <Portfolio />
    </>
    );
}

export default App;
