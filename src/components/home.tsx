import React from 'react'
import styled from 'styled-components'
import bgNoise from '../images/bgNoise.gif'
const Home = ()=>{
    return(<HomeBackground>
        <HomeContainer>

        
          <Header>
          
                  nawigacja
           
          </Header>
          <NameSection>
            <h1>
              <span>Rogóż</span>  
              <span>Wojciech</span>  
            </h1>
          </NameSection>

       
        </HomeContainer>
        </HomeBackground>
    )
}
 const HomeContainer = styled.div`
 display:flex;
 flex-direction:column;
    height:100%;
    width:100%;
    background-color:rgba(0,0,0,0.9);

 `
const HomeBackground = styled.div`
    height:100%;
    width:100%;
background-image:url("${bgNoise}")
`
 const Header = styled.header`
    height:70%;
    width:100%;
    color:#fff;
      
 
    
  
 `
 const NameSection =  styled.section`
 display:flex;
 align-items:flex-end;
    width:80%;
    height:30%;
    color:#fff;
    
    text-transform:uppercase;
    h1{
        display:flex;
        flex-direction:column;
        margin-left:20px;
    }
    
 `
export default Home