import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <HeaderBox>
            <Nav>
                <Logo>
                    <Link to='/home'>Wojciech Rogóż</Link>
                </Logo>
                <Ul>
                <Link to='/home'>About</Link>
                <Link to='/home'>Contact</Link>
                </Ul>
            </Nav>
        </HeaderBox>
    )
}
const HeaderBox = styled.header`
    font-size:0.7rem;
    font-family: 'Montserrat', sans-serif;
    width:100%;
    padding:0 20px;
    z-index:100;

  

`
const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    height:4rem;
   
    margin:0 auto;
    position:relative;
    &:before{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;  
        height:1px;
        background-color:#202020;
        transform-origin:left;
        transition:transform 2s cubic-bezier(.19, 1, 0.22, 1);
       
        
    }
`
const Logo = styled.div`
    font-family: 'Montserrat', sans-serif;
    width:25%;
    
    a{
        text-decoration:none;
        color:#202020;
        outline:none;
    }
`
const Ul=styled.ul`
    display:flex;
    list-style:none;
  
    a{
      color:#202020;
      text-decoration:none;
      margin:0 10px; 
      outline:none;      
        }
`

export default Header