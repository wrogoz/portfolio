import React from 'react';
import styled, { keyframes } from 'styled-components'


const Projects = ()=>{
    return(
        <ProjectsBox>
            <SectionName>
                Selected works
            </SectionName>
        </ProjectsBox>
    )
}
const underLineAnimation = keyframes`
  from {
    width:0;
  }

  to {
    width:100%;
  }
`;
const ProjectsBox = styled.section`
    padding: 0 20px;
    
    
`
const SectionName = styled.p`
    font-size:0.7rem;
    font-family: 'Montserrat', sans-serif;
    position:relative;
    padding-bottom:1.5rem;
   
    &:after{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;  
        height:1px;
        background-color:#202020;
      
        
        animation:${underLineAnimation} 2s cubic-bezier(.19, 1, 0.22, 1);;
    }
`

export default Projects