import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home';
import Projects from "./components/pages/Projects";
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from "./components/pages/NewProject";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer"

function App() {
  return(
    <div>
      <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
