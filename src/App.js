import './styles/App.scss';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import AboutUs from "./components/AboutUs/AboutUs";
import RecommendedObjects from "./components/RecommendedObjects/RecommendedObjects";
import Instagram from "./components/Instagram/Instagram";
import Bio from "./components/Bio/Bio";


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <AboutUs/>
            <RecommendedObjects/>
            <Instagram/>
            <Bio/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
