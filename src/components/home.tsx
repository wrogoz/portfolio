import React from 'react'
import styled from 'styled-components'


const Home =()=>{
    return(
        <HomeContainer>
           
            <section>
                FRONTEND +DEVELOPER
            </section>
            <section>
                <div>Selected works</div>
                <div>work 1</div>
                <div>work 2</div>
                <div>work 3</div>
            </section>
            <footer>
                footer
            </footer>
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