import "./App.scss";
// import Test from "./Test";
import Hero from "./components/hero/hero";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <section id="HomePage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Content">Content</section>
      <section id="About">About</section>

      {/* <Test></Test>
      <Test></Test>
      <Test></Test> */}
    </>
  )
};

export default App;
