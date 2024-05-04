import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Home from "./Home"

import '../../index.css'


const Pages = () => {
    return(
        <div  className="pageContainer">
             <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}
export default Pages;
