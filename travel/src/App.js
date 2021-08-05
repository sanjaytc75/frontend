import logo from './travel.png';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import Main from "./MyComponents/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './MyComponents/Carousel';


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Carousel/>
      <Footer/>

    </>
  );
}

export default App;

