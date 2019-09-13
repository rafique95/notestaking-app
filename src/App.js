import React from 'react';
// import PrimarySearchAppBar from './components/menu/searchMenu'
import PersistentDrawerLeft from './components/drawer/drawer'
//import { BrowserRouter } from "react-router-dom";
// import {Route} from 'react-router-dom';
function App() {
  return (
    

    <div className="App">
     {/* <PrimarySearchAppBar /> */}
     {/* <Route path="/"  render={()=><h1>Home</h1>}></Route> */}
     <PersistentDrawerLeft></PersistentDrawerLeft>
     
    </div>
   
    
  );
}

export default App;
