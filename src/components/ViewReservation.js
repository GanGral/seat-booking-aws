import styled from "styled-components";
import { useEffect, useState,useContext } from "react";
import tombstone from "../assets/tombstone.png";

const ViewReservation = () => {

  const [reservationNumber, setReservationNumber] = useState(JSON.parse(sessionStorage.getItem('reservationNumber')))
  const [reservationInfo, setReservationInfo] = useState(null);
  const [state, setState] = useState("Loading")

  useEffect(() => {
    
    fetch(`https://hidden-savannah-51883.herokuapp.com/api/get-reservation/${reservationNumber}`)
    .then ((res) => res.json())
    .then((data)=> {
      console.log(data.data)
      setReservationInfo(data.data);
      setState("Loaded")
})
    .catch((err) => {
        throw new Error (err.stack)
    })

    
  }, [reservationNumber]);


if (state === "Loading") {
  return <Div>Loading</Div>
}

  return (
    <Wrapper>
    <Wrapper1>
    <Title>This is your last reservation </Title>
    <Div><span>Reservation #: </span>{reservationNumber}</Div>
    <Div><span>Flight #: </span>{reservationInfo.flight}</Div>
    <Div> <span>seat #: </span>{reservationInfo.seat}</Div>
    <Div> <span>Name: </span>{reservationInfo.givenName} {reservationInfo.surname}</Div>
    <Div><span>Email: </span>{reservationInfo.email}</Div>
    </Wrapper1>
    <Img src={tombstone}/>
  </Wrapper>)
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10vh;
`;
const Wrapper1 = styled.div`
border: 2px solid var(--color-alabama-crimson);
border-radius: 5px;
padding: 18px;
width: 500 vw;

`;
const Title = styled.div`
font-family: var(--font-body);
color:var(--color-alabama-crimson);
font-size: 32px;
border-bottom: 2px solid var(--color-alabama-crimson);
margin-bottom:20px;
align-content: flex-start;
padding-bottom:20px;
`;
const Div = styled.div`
padding: 10px;
span{
  font-weight: bold;
}
`;
const Img = styled.img`
padding:10px;
height:20vh;
`;


export default ViewReservation;
