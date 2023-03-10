import { createContext, useEffect, useState } from "react";

export const  FlightContext = createContext(null);

export const  FlightProvider = ({children}) => {

    const [flightsList, setFlightsList] = useState(null);
    
    const [reservationNumber, setReservationNumber] = useState(null);
      
   
        useEffect(() => {
            fetch("https://hidden-savannah-51883.herokuapp.com/api/get-flights")
            //fetch("/test")
            //.then ((res) => res.text())
            .then ((res) => res.json())
             .then((data)=> {
                 console.log(data.data);
                 setFlightsList(data.data);
                
         })
            .catch((err) => {
                throw new Error (err.stack)
            })
        },[])


    return (
        <FlightContext.Provider 
        value ={{
            flightsList,
            setFlightsList,
            reservationNumber,
            setReservationNumber
            
        }}>
            {children}
        </FlightContext.Provider>
    )
}