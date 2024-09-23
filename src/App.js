import "./App.css";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import BgImgae from './assets/images/document.jpeg'

function App() {
  return (
    <div className=" ">
      <Header />
      <Hero />
      <Features />
      <div className="my-16 opacity-40">
        <img src={BgImgae} alt="" className="w-full"/>
      </div>
    </div>
  );
}

export default App;
