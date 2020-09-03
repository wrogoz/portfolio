import React from 'react';
import styled from 'styled-components'
import bgNoise from './assets/images/bgNoise.gif'
import { Route} from 'react-router-dom';
import Intro from './components/intro'
import Header from './components/header'
import Home from './components/home'
function App() {
  return (
    <BgContainer>
         <Container>
         

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
    </BgContainer>
  );
    
   
}


const BgContainer = styled.div`
  height:100%;
  width:100%;
background-image:url("${bgNoise}")
`
const Container = styled.div`
  width:100vw;
  min-height:100vh;
  background-color:rgba(234,234,234,0.97);
  
  font-family: 'Michroma', sans-serif;
`
export default App;
