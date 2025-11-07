import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default App;
