import React from 'react';
import styled from 'styled-components'
import GlobalFonts from "./assets/fonts/fonts";
import { Route} from 'react-router-dom';
import Intro from './components/intro'
import Header from './components/header'
import Home from './components/home'
function App() {
  return (
    <Container>
         <GlobalFonts />

         <Header/>
      <Route path='/'>
        <Home/>
      </Route>
    </Container>
  );
}



const Container = styled.div`
  width:100vw;
  height:100vh;
  background:#eaeaea;
  font-family: 'Audiowide', cursive;
`
export default App;
