import React from 'react'
import styled from 'styled-components'
import SidebarList from './SidebarList'


const Sidebar = () => {
  return (
    <Container>
        <Wrapper> 
            <SidebarMenu>
            <SidebarList/>
            </SidebarMenu>
        </Wrapper>
    </Container>
  )
}

//estilos:
const Container=styled.div`
    
    position: sticky;
    //top: 50px;
   // margin-left: 10px;
    padding-bottom: 25px;
    width: 250px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 5px;
}
 &::-webkit-scrollbar-track{
    background-color: #f1f1f1;
}
&::-webkit-scrollbar-thumb{
    background-color: #c1c1c1;
}
   
    `

const Wrapper=styled.div`
padding: 20px;


`
const SidebarMenu= styled.div`
    margin-bottom: 10px;
`


export default Sidebar