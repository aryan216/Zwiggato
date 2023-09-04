import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Page from "./components/Page";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Page />} errorElement={<Error/>} />
          <Route path="/about" element={<AboutUs />} />
          
          

        </Routes>
      </Router>
    </div>
  );
}


export default App;
