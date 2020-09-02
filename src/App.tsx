import React from 'react';
import styled from 'styled-components'
import GlobalFonts from "./assets/fonts/fonts";
import {Switch, Route, Link,NavLink} from 'react-router-dom';
import Home from './components/home'
function App() {
  return (
    <Container>
         <GlobalFonts />
      <Route path='/'>
        <Home/>
      </Route>
    </Container>
  );
}



const Container = styled.div`
  width:100vw;
  height:100vh;
  background:pink;
  font-family: 'Audiowide', cursive;
`
export default App;
