import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hilights from "./components/Highlight";
import Footer from "./components/Footer";
// import Model from "./components/Model";
// import Features from "./components/Features";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hilights />
      {/* <Model /> */}
      {/* <Features /> */}
      <Footer />
    </main>
  );
};

export default App;
