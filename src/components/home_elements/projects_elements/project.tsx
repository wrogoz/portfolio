import React from 'react'
import styled, { keyframes } from 'styled-components'

interface ProjectProps{
    projectNumber:string
    projectImg:any
    projectTitle:string
}

const Project = (props:ProjectProps)=>{
    return(
        <ProjectBox>
            <ProjectNum>
                {props.projectNumber}
            </ProjectNum>
            <img src={props.projectImg} alt=""/>
            <ProjectTitle>{props.projectTitle}</ProjectTitle>
        </ProjectBox>
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
const ProjectBox = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    padding-bottom:1.5rem;
    img{
        height:auto;
        width:100%;
        margin:0 auto;
    }
    &:after{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;  
        height:1px;
        background-color:#202020;
      
        
        animation:${underLineAnimation} 2s cubic-bezier(.19, 1, 0.22, 1);
    }
`
const ProjectNum = styled.p`
    color:#fff;
    font-size:2rem;
    `
const ProjectTitle=styled.h2`
    text-align:center;
    text-transform:uppercase;
    font-size: 1rem;
    padding-top: 1rem;
    letter-spacing: 4px;
}
`
export default Project