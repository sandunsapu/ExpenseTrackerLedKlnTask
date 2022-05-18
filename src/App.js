import styled from "styled-components";
import HomeComponent from "./modules/home";
import react from "react";
import pic from "./LEDlogo.png";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header=styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
`;

function App() {
  return (
    <Container>
      <Image src={pic} alt="LED KLN"/>
      <Header>Expense Tracker LED KLN</Header>
      <HomeComponent/>
    </Container>
  );
}

export default App;
