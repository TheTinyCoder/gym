import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Pricing from './components/Pricing/Pricing';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App" id='App'>
      <Hero></Hero>
      <Programs></Programs>
      <Benefits></Benefits>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
