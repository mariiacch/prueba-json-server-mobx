import React from 'react'
import styled from 'styled-components'
import SidebarListItem from './SidebarListItem'


const SidebarList = () => {
  return (
    <>
    <ListContainer> 
        <SidebarListItem nombre="Structure"/>
        <SidebarListItem nombre="User Management"/>
        <SidebarListItem nombre="Taxonomy"/> 
        <SidebarListItem nombre="Automation"/>
        <SidebarListItem nombre="Form Management"/>
        <SidebarListItem nombre="Workflow"/>
        <SidebarListItem nombre="Smart Capture"/>
        <SidebarListItem nombre="Control Centres"/>
        <SidebarListItem nombre="Reports"/>
        <SidebarListItem nombre="Report Mapping"/>
        <SidebarListItem nombre="Monitoring"/>
        <SidebarListItem nombre="User Mode"/>
        <SidebarListItem nombre="Settings"/>
    </ListContainer>
    </>
  )
}

const ListContainer =styled.ul`
    list-style: none;
    padding: 5px;

`

export default SidebarList

