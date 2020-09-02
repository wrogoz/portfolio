import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const NavigationTest1 = ()=>{
    return(
        <Header>
        
   
         
  
        <nav>
            <Ul>
            <li><Link to="/about">01/Projects</Link></li>
            <li><Link to="/about">02/About me</Link></li>
            <li><Link to="/about">03/Contact</Link></li>
        </Ul>
        </nav>
        </Header>
    )
}
const Header = styled.header`
display:flex;
align-items:center;
justify-content:flex-end;
   height:70%;
   width:100%;
   color:#fff;
     

   
 
`
const Ul = styled.ul`
    text-transform:uppercase;
    list-style:none;
    margin-right:1rem;
    li{
        margin:2.5rem 0 2.5rem 1rem ;
        font-size:6vw;
        color:#888;
        
    }
    li:first-of-type{
        transform:rotate(17deg);
        margin-left:2rem;
    }    
    li:last-of-type{
        transform:rotate(-17deg);
        margin-left:2.5rem;
    }
        a{  
            color:#888;
            text-decoration:none;
            outline:none;
        }
        a:active,a:visited{
            color:#888;
            text-decoration:none;
            outline:none;

        }
        a:hover{
            color:#bbb;
        }
    }
`
export default NavigationTest1