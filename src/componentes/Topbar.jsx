import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
  return (
    <>
    <Container> 
        <Wrapper>
        <BoxLogo>
           
           <span >ADMIN 
           </span> <p >*</p>
          
          
           
           </BoxLogo>
        </Wrapper>

    </Container>
    </>
  )
}

const Container= styled.div`
            
            width: 100%;
            height: 60px;     
           

    `;

const Wrapper= styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;       
`;  

const BoxLogo=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;  
    position:relative;
    span {
            font-size: 2rem;
            font-weight: 800;
            //margin-bottom: 10px;
        }
        p{
          color:purple;
          font-weight: 800;
          font-size: 30px;
          position:absolute;
          top:-35px;
          right:-15px;
        }
    `;



export default Topbar