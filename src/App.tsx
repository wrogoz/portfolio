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
      <Route path='/intro'>
        <Intro/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
     
      <footer>
          footer
      </footer>
    </Container>
  );
}



const Container = styled.div`
  width:100vw;
  min-height:100vh;
  background:#eaeaea;
  font-family: 'Michroma', sans-serif;
`
export default App;
