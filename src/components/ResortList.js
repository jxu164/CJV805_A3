import React,{useState,useEffect} from 'react';
import Vacation from './Vacation';
import ResortItem from "./ResortItem";
import { Link } from 'react-router-dom';


const ResortList = () => {

  const [vacations, setVacations] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:8080/Vacations/")
    .then(res =>res.json())
    .then(data =>{
        setVacations(data)
        console.log(data);
    })
    .catch(err=>console.log(`Error: ${err}`))
  }, [])

  return (
    
    <section id="section-resort-list">
     <div className= "container">
          
          <h1>Featured Resort</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          
          {vacations.map(vacation=>( <Vacation key={vacation.id} 
          hotelName={vacation.hotelName} 
          location = {vacation.location} 
          resortType ={vacation.resortType} 
          price={vacation.price} 
          description = {vacation.description} 
          houseRules = {vacation.houseRules} 
          amenities = {vacation.amenities}/>) )}
          
          </div>
      </div>

    </section>

  );
};

export default ResortList;
