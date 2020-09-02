import React from 'react';
import styled, { keyframes } from 'styled-components'
import Project from './projects_elements/project'
import underContruction from '../../assets/images/underContruction.jpg'
const Projects = ()=>{
    return(
        <ProjectsBox>
            <SectionName>
                Selected works
            </SectionName>
            <Project
            projectNumber='01/'
            projectImg={underContruction}
            projectTitle="Medbase" />

<Project
            projectNumber='02/'
            projectImg={underContruction}
            projectTitle="Klinika laserowa" />

<Project
            projectNumber='03/'
            projectImg={underContruction}
            projectTitle="Architektura A+B" />

<Project
            projectNumber='04/'
            projectImg={underContruction}
            projectTitle="Weather App" />

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