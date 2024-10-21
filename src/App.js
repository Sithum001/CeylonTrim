import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import SpecialitySection from "./pages/SpecialitySection";
import Testimonials from "./pages/Testimonials";
import { BrowserRouter } from "react-router-dom";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <Home />
      </>
      <>
      <SpecialitySection/>
      </>
      <>
      <Banner/>
      </>
      <>
     <Testimonials/>
      </>
      <>
      <Footer/>
      </>
    </BrowserRouter>
  );
}



export default App;
