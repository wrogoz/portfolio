import React from 'react'
import styled from 'styled-components'
import ProfessionTitle from './home_elements/ProfesionTitle';
import Projects from './home_elements/projects'
const Home =()=>{
    return(
        <HomeContainer>
           
           
               <ProfessionTitle/>
            
            <Projects/>
            
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
`

export default Home