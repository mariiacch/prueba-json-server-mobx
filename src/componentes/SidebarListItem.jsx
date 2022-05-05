import React from 'react'
import styled from 'styled-components'

const SidebarListItem = ({nombre}) => {
  return (
    <>
        <ListItem>{nombre}</ListItem>
       
    </>
  )
}

const ListItem=styled.li`
color:black;
    padding: 5px 0px 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 10px;
        margin-bottom:10px;
       
`
export default SidebarListItem