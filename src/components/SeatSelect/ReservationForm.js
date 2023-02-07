import {useEffect, useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlightContext } from "../FlightContext";
import GlobalStyles from "../GlobalStyles";


const ReservationForm =({selectedSeat, currentFlightId})=> {
    const {reservationNumber, setReservationNumber} = useContext(FlightContext);
    const [givenName, setGivenName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState(""); 
  
    let navigate = useNavigate();
    
    const submitReservation = (ev) => {
       ev.preventDefault();
        fetch("https://hidden-savannah-51883.herokuapp.com/api/add-reservation", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",},
        body: JSON.stringify({selectedSeat ,currentFlightId, givenName, surname, email}),

    })
    .then((res) => res.json())
    .then((data) => {
        setReservationNumber(data.data);
        sessionStorage.setItem('reservationNumber',JSON.stringify(data.data));
        navigate("/confirmed");
    })
        
    setGivenName("");
    setSurname("");
    setEmail("");
}
   

    return (
    <Wrapper>
        <Form onSubmit={submitReservation}>
            <Input onChange={(ev) => setGivenName(ev.target.value)} placeholder="First Name" value={givenName}/>
            <Input onChange={(ev) => setSurname(ev.target.value)}  placeholder="Last Name" value={surname}/>
            <Input onChange={(ev) => setEmail(ev.target.value)}  type="email" placeholder="Email" value={email}/>
            <Input type="submit" value="Confirm"/>
        </Form>

    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

const Form = styled.form`
display: flex;
flex-direction:column;
border: 2px solid var(--color-alabama-crimson);
border-radius: 5px;
padding: 18px;
`;
const Input = styled.input`
align-items: center;
&[type=submit]{
    font-family: var(--font-heading);
    background-color:#D1560D;
    color: var(--color-desert-sand);
}

`;

export default ReservationForm;