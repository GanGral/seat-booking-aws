
import { useContext, useState } from "react";
import { FlightContext } from "../FlightContext";
import styled from "styled-components";
import ReservationForm from "./ReservationForm";
import Plane from "./Plane";


const SeatSelect = () => {
  const {flightsList, setFlightsList} = useContext(FlightContext);
  const [currentFlightId, setCurrentFlightId] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

    return (
      <Wrapper>
          <Wrapper1>
            <h3>Flight number</h3>
            <Select onChange={ev => setCurrentFlightId(ev.target.value)}>
              <Option>Select a flight</Option>
              {flightsList?.map((flight) => {
              return <Option key={flight._id}>{flight._id}</Option>})}
            </Select>
          </Wrapper1>
     
          <h2>Select your seat and Provide your information!</h2>
   
      <Wrapper2>
        <Plane currentFlightId={currentFlightId} setSelectedSeat={setSelectedSeat}/>
        <ReservationForm selectedSeat={selectedSeat} currentFlightId={currentFlightId}/>
      </Wrapper2>

      
      </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const Wrapper1 = styled.div`
height: 50px;

background-color: var(--color-cadmium-red);
display: flex;
align-items: center;
padding: var(--padding-page) 18px;
`;
const Select = styled.select`
margin-left:10px;
height:25px;
color:gray;
`;

const Option = styled.option`
width:max-content;
`;

const Wrapper2 = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

export default SeatSelect;
