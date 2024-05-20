import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Button, MyButton } from './components/Button.styled';

function App() {
  return (
    <div className="App">
      <Section>
        <Box>
          <Button>Button 1</Button>
          <MyButton>Button 2</MyButton>
        </Box>
      </Section>
    </div>
  );
}

export default App;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #5e5151;
`

const Box = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 5px;
`
