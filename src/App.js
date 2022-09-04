
import './App.css';
import Navigationbar from './Components/Navigationbar';
import Intro from "./Components/Intro"
import Trending from "./Components/Trending"
import Superhero from "./Components/Superhero"
import "./Style/LandingPage.css"


function App() {
  return (
    <div>
      {/* Intro section  */}
      <div className="myBG">
      <Navigationbar/>
      <Intro/>
      </div> 
      {/* End of intro section */}
      
      {/*Trending section  */}
    <div className="trending">
      <Trending/>
      </div>
      {/*end of trending section  */}
      <div className="Superhero">
  <Superhero/>
</div>
    </div>



  );
}

export default App;
