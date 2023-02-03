import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Confirmation from "./Confirmation";
import GlobalStyles from "./GlobalStyles";
import SeatSelect from "./SeatSelect";
import ViewReservation from "./ViewReservation";





const App = () => {

 
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <Main>
        <Routes>
          <Route path="/" element={<SeatSelect/>}/>
          <Route path="/confirmed" element={<Confirmation/>} />
          <Route path="/view-reservation" element={<ViewReservation/>} />
          <Route path="">404: Oops!</Route>
        </Routes>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
