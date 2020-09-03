import React from 'react'
import styled from 'styled-components'
import arrow from '../../../assets/images/arrow2.png'
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
            <ProjectDescription>
                <img src={arrow} alt="arrow"/>
                <div><p>tetete</p></div>
            </ProjectDescription>
            <ProjectUnderline/>
        </ProjectBox>
    )
}


const ProjectBox = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    padding-top: 1rem;
    img{
        height:auto;
        width:100%;
        margin:0 auto;
    }
    `
    const ProjectUnderline = styled.div`
        width:100%;  
        height:1px;
        background-color:#202020;
        margin-top:1.5rem;
        
`
const ProjectNum = styled.p`
    color:#fff;
    font-size:2rem;
    padding-bottom: 0.5rem;
    `
const ProjectTitle=styled.h2`
    text-align:center;
    text-transform:uppercase;
    font-size: 1rem;
    padding-top: 1rem;
    letter-spacing: 4px;
}
`
const ProjectDescription = styled.div`
    display:flex;
    justify-content:space-between;
    font-size: 0.6rem;
    align-items:center;
    img{
       transform:rotate(180deg);
    }
`
export default Project