
import React from "react";
      
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CheckBoxTable from './pages/CheckBoxTable';
import CheckboxSlectTable from "./pages/CheckboxSlectTable";
import Headder from "./pages/Headder";
import Appbar from "./pages/Appbar";
import TabBar from "./pages/TabBar";
import Home from "./components/Home";
import MakerScreen from "./components/MakerScreen";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {

  
  return (
    <div id="container">
      
      {/* <CheckBoxTable/> */}
      <Headder/>
      
      <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/login"  element={<Login/>}/>
        <Route exact path="/makerscreen/:id"  element={<MakerScreen/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
