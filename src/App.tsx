import React from 'react';
import styled from 'styled-components'

import {Switch, Route, Link,NavLink} from 'react-router-dom';
import Home from './components/home'
function App() {
  return (
    <Container>
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
`
export default App;
