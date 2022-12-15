import logo from './logo.svg';
import './App.css';
import Navbar from './compounts/navbar/Navbar';
import Footer from './footer/Footer';
import Allrouting from './compounts/Allrouting';

function App() {
  return (
    <div className="App">
      {/* <h1>-woozy-north-6172</h1> */}
      <Navbar/>
      <Allrouting/>
      <hr/>
     <Footer/>
    </div>
  );
}

export default App;
