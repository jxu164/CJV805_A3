import React,{useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResortList from "../components/ResortList";

const HomePage = () => {


  return (
    <div className="grid grid-row-3" id="main-container">

        <Header/>
        <main>
          <Hero/>
          <ResortList />
        </main>
        <Footer/>

    </div>
  )
}

export default HomePage