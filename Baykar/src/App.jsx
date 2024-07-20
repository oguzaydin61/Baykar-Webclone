import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import Product from "./section/Product.jsx";
import SaleOut from "./section/SaleOut.jsx";
import Testimonials from "./section/Testimonials.jsx";
import Collection from "./section/Collection.jsx";
import Map from "./section/Map.jsx";
import Footer from "./section/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
        <Product/>
        <SaleOut/>
        <Testimonials/>
        <Collection/>
        <Map/>
      <Footer/>

    </>
  )
}

export default App
