
import './App.css';
import Carausel from './Components/Carausel/Carausel';
import Companies from './Components/Companies/Companies';
import Contact from './Components/Contact-us/Contact';
import Footer from './Components/Footer/Footer';
import Getstarted from './Components/Getstarted/Getstarted';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Value from './Components/Value/Value';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Companies />
        <Carausel />
        <Value />
        <Contact />
        <Getstarted />
        <Footer />
      </div>

    </>
  );
}

export default App;
