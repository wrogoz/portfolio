import React from 'react'
import styled from 'styled-components'
import bgNoise from '../images/bgNoise.gif'

const Intro = ()=>{
    return(<IntroBackground>
        <IntroContainer>

        
          <NameSection>
            <h1>
              <span>Rogóż</span>  
              <span>Wojciech</span>  
            </h1>
          </NameSection>

       
        </IntroContainer>
        </IntroBackground>
    )
}
 const IntroContainer = styled.div`
 display:flex;
 flex-direction:column;
    height:100%;
    width:100%;
    background-color:rgba(0,0,0,0.9);

 `
const IntroBackground = styled.div`
    height:100%;
    width:100%;
background-image:url("${bgNoise}")
`

 const NameSection =  styled.section`
 display:flex;
 align-items:flex-end;
    width:100%;
    height:100%;
    color:#fff;
    
    text-transform:uppercase;
    h1{
        display:flex;
        flex-direction:column;
        line-height: 0.85;
        padding: 2rem 2rem 2rem 1rem;
        letter-spacing: 2px;
        font-size: 9.5vw;
    }
    
 `
export default Intro