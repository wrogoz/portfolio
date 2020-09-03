import React from 'react';
import styled from 'styled-components'


const ProfessionTitle = ()=>{
    return (
        <section>
            <ProfessionName>
                <span>FrontEnd</span>
                <span>Developer</span>
                    
            </ProfessionName>
        </section>
    )
}

const ProfessionName = styled.h1`
    display:flex;
    flex-direction:column;
    font-size:2rem;
    text-align:center;
    text-transform:uppercase;
    padding:2rem 0 6rem 0;
   

`

export default ProfessionTitle