import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';


const ResortDescriptionPage = () => {

 const [resort,setResort]=  useState({
     id:0,
     title :"",
     img : null,
     description :"",
     price : 0
 })

 const {id} = useParams()
 useEffect(()=>{

    const URL = `http://localhost:8080/Vacations/${id}`
    //MAKE AN AJAX request

    fetch(URL) // GET
    .then(response=>response.json())

    .then(json=>{
    
      setResort(json)
    })
    .catch(err=>console.log(err))

 },[])

  return (
    <div className="grid grid-row-3" id="main-container">

    <Header/>
    <main>
        <section id="resort-description-section">
            <div className="container grid grid-col-4 grid-gap-2">
            
                <div className="resort-description-content-area">
                    <p> {resort.hotelName}</p>
                    <p> Location: {resort.location}</p>
                    <p> Type of Resort: {resort.resortType}</p>
                    <p> ${resort.price} per night</p>
                    <p> Description: {resort.description}</p>
                    <p> House Rules: {resort.houseRules}</p>
                    <p> Amenities: {resort.amenities} </p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>

</div>
  )
}

export default ResortDescriptionPage