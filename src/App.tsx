import React from 'react';
import logo from './images/Rectangle 1.svg'
import './App.css';
import styled from 'styled-components';
import { Button, MyButton } from './components/Button.styled';
import { Image } from './components/Image.styled'
import { Title } from './components/Title.styled';
import { Text } from './components/Text.styled'

function App() {
  return (
    <div className="App">
      
        <Card>
          <Image src={logo} alt="LogoCard" />
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit <br/>
                tempusrisu ut. Sit molestie ornare in venen.</Text>
          <Button color="#4E71FE">See more</Button>
          <MyButton color="#4E71FE">Save</MyButton>
          
        </Card>
      
    </div>
  );
}

export default App;

const Card = styled.div`
  height: 350px;
  width: 300px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: calc(50% - 175px);
  left: 0;
  right: 0;
  margin: 0 auto;

  button{
    cursor: pointer;
  }
`;
