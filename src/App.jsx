import Header from "./pages/Header"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Abouts from "./pages/Abouts"
import Projects from "./pages/Projects"
import Footer from "./pages/Footer"
import Faqs from "./pages/Faqs"
import Contacts from "./pages/Contacts"
import Services from "./pages/Services"
import ScrollToTop from "./components/ScrollToTop"
import Missing from "./pages/Missing"


function App() {


  return (
    
      <div className="scroll-smooth">
        <Header/>
        <ScrollToTop/>
        <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element={<Abouts/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="*" element={<Missing/>}/>
        </Routes>
        <Footer/>
      </div>
    
    
  )
}

export default App
