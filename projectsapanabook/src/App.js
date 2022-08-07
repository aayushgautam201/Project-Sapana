
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Blogs from "./Pages/Blogs";
import BuySell from "./Pages/BuySell";
import LoginSignup from "./Pages/LoginSignup";
// import RoadMaps from "./Pages/RoadMaps";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Carddetailpage from './Pages/Carddetailpage';
import Detailbuysell from './Pages/Detailbuysell';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Routing from "./routing/router";
import Carousel from "./Components/Carousel";



const App = () => {


  // const [addbooks, setAddbooks] = useState([]);
  
  let data = [
      {
         id: 1,
         image: './images/Atomic habits.jpg',
        title: "Lemon Gautam",
        price: 1250,
        // download: 'D:\books'
      },
      {
         id: 2,
         image: './images/rich dad poor dad.jpg',
        title: "Lemon Gautam",
        price: 1250,
        // download: "D:\books"
      },
      {
         id: 3,
         image: './images/eat that frog.jpg',
        title: "Lemon Gautam",
        price: 1250,
        // download: "D:\books"
      },
      {
         id: 4,
         image: './images/The subtle art of not giving a fuck.jpg',
        title: "Lemon Gautam",
        price: 1250,
        // download: "D:\books"
      }
  ]


  //!fetch API state ko muni bata use garenee

  // useEffect(() => {
  //   axios.get('')
  //     .then(res => {
  //       console.log(res.data);
  //       setAddbooks(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, []);
  //! useEffect use garda fetch halnee ani api ko loop banda garna lai [] halnee 
  // const addExpenseHandler = (expense) =>
  // {
  //     const updatedExpense = [expense, ...expenses];
  //     setExpenses(updatedExpense);
  // }

  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home books = {data}/>}/>
        {/* <Route path="Blogs" element={<Blogs />} /> */}
        <Route path="/BuySell" element={<BuySell books = {data}/>} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        {/* <Route path="RoadMaps" element={<RoadMaps />} /> */}
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Carddetailpage />} />
        <Route path="/olddetail/:id" element={<Detailbuysell />} />
    </Routes>
       <Footer/>
      
    </div>
  );
}

export default App;