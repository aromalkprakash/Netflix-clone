import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { action ,Horror,Originals} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall={true}/>
     <RowPost url={Horror} title='Horror' isSmall={true}/>


    </div>
  );
}

export default App;
