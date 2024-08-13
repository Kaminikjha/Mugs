
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    < div className='bg-gray-900 '>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
