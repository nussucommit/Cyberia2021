import React from 'react';
import styled from "styled-components";

function Home() {
    return (
      <Wrap>
        <Logo src="./images/Cyberia Silver Logo.png" alt="Cyberia 2021 Logo" />
        <Button>Learn More</Button>
      </Wrap>
    );
}

export default Home

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center; // vertical
  align-items: center; // horizontal
  background-image: url("/images/Home_BG.jpg");
`

const Logo = styled.img`
  padding-top: 15vh;
  text-align: center;
  max-width: 100%;
  height: auto;
`

const Button = styled.div`
  // Button Container
  height: 40px;
  width: 256px;
  border-radius: 100px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.65;
  cursor: pointer;

  // Button Text
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: black;
  
`
