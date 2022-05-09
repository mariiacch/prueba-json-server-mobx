import React from 'react'
import styled from 'styled-components'
import SidebarList from './SidebarList'
import Scroll from '../StyleElements/Scroll'

const Sidebar = () => {
  return (
    <ContainerScroll>
        <Wrapper> 
            <SidebarMenu>
            <SidebarList/>
            </SidebarMenu>
        </Wrapper>
    </ContainerScroll>
  )
}

const ContainerScroll=styled(Scroll)`
width:250px;

`

const Wrapper=styled.div`
padding: 10px;



`
const SidebarMenu= styled.div`
    margin-bottom: 10px;
`


export default Sidebar