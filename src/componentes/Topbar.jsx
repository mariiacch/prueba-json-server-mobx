import React from 'react'
import styled from 'styled-components'
import {ReactComponent as SvgAlert} from './../Icons/Alert.svg';
import {ReactComponent as SvgBell} from './../Icons/Bell.svg';
import {ReactComponent as SvgExt} from './../Icons/External.svg';

const Topbar = () => {
  return (
    <>
    <Container> 
        <Wrapper>
        <BoxLogo>
           
           <span >ADMIN 
           </span> <p >*</p>
          
          
           
           </BoxLogo>
           <BoxIcon>
           <ContainIcon> 
             <SvgA/>
             
           </ContainIcon>
           <ContainIcon> 
             <SvgB/>
             <span>1</span>
             
           </ContainIcon>
           <ContainIcon> 
             <SvgE/>
             
           </ContainIcon>
           </BoxIcon>

        </Wrapper>

    </Container>
    </>
  )
}

const Container= styled.div`     
            width: 100%;
            height: 70px;         
    `;

const Wrapper= styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content:space-between;

 
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
           // border:1px solid;
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

const BoxIcon=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;  
    position:relative;
   `
const ContainIcon= styled.span`
color:#6b6b6b;
width: 22px;
margin-left:10px;
position:relative;

span{
  position:absolute;
  top:-8px;
  left:10px;
  text-align:center;
  width: 15px;
  height:15px;
  border-radius:50%;
  background-color:red;
  color:white;
  font-weight:bold;
  font-size:10px;
}
`

const SvgA=styled(SvgAlert)``
const SvgB=styled(SvgBell)``
const SvgE=styled(SvgExt)``


export default Topbar