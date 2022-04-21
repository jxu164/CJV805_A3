import React, {useState} from 'react'

const AddVacation = () =>{

    const [vacation, setVacation] = useState({
        hotelName : "",
        description : "",
        resortType : "",
        price:"",
        houseRules: "",
        amenities: "",
        location: ""
    });

    
    const submitForm = (e) =>{

        e.preventDefault();

        fetch("http://localhost:8080/Vacations", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vacation)
        })
        .then(res =>res.json())
        .then(data =>{
            alert(`The destination ${data.hotelName} was successfully added.`)
        })
        .catch(err =>console.log(`Error:${err} `))
    }

    return (
        <div>
            <form action = "/" method = "POST" onSubmit = {submitForm}>
                
                <div>
                    <label htmlFor ="hotelName">Name</label>
                    <input type = "text" name = "hotelName" id = "hotelName" value = {vacation.hotelName} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            hotelName:event.target.value
                        })
                    }}/>
                </div>
                
                <div>
                    <label htmlFor ="resortType">Type of Resort</label>
                    <input type = "text" name = "resortType" id = "resortType" value = {vacation.resortType} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            resortType:event.target.value
                        })
                    }}/>
                </div>
                
                <div>
                    <label htmlFor ="price">Price</label>
                    <input type = "text" name = "price" id = "price" value = {vacation.price}onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            price:event.target.value
                        })
                    }}/>
                </div>

                <div>
                    <label htmlFor ="location">Location</label>
                    <input type = "text" name = "location" id = "location" value = {vacation.location} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            location:event.target.value
                        })
                    }}/>
                </div>

                <div>
                    <label htmlFor ="description">Description</label>
                    <input type = "textarea" cols = "20" rows = "10" name = "description" id = "description" value = {vacation.description} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            description:event.target.value
                        })
                    }}/>
                </div>

                <div>
                    <label htmlFor ="amenities">Amenities</label>
                    <input type = "text" name = "amenities" id = "amenities" value = {vacation.amenities} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            amenities:event.target.value
                        })
                    }}/>
                </div>
                
                <div>
                    <label htmlFor ="houseRules">House Rules</label>
                    <input type = "text" name = "houseRules" id = "houseRules" value = {vacation.houseRules} onChange={(event) =>{
                        setVacation({
                            ...vacation,
                            houseRules:event.target.value
                        })
                    }}/>
                </div>

                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default AddVacation;