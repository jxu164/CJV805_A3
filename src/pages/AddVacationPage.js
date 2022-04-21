import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import AddVacation from "../components/AddVacation";

const AddVacationPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">

      <Header/>
      <main>
        <div className="container">
            
            <h1>Add Vacation Destinations Here</h1>
            <div>
              <AddVacation />
            </div>

          </div>
      </main>
    <Footer/>

</div>
  )
}

export default AddVacationPage