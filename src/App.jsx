import Header from "./Pages/Header"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Abouts from "./Pages/Abouts"
import Projects from "./Pages/Projects"
import Footer from "./Pages/Footer"
import Faqs from "./Pages/Faqs"
import Contacts from "./Pages/Contacts"
import Services from "./Pages/Services"
import ScrollToTop from "./Components/ScrollToTop"
import Missing from "./Pages/Missing"


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
