import React from 'react'
import styled from 'styled-components'

const TopContent = () => {
  return (
    <>
    <TopList>
        <TopListItem purple>Assist</TopListItem>
        <TopListItem>Triggers</TopListItem>
        <TopListItem>Actions</TopListItem>
        <TopListItem>Transfers</TopListItem>
        <TopListItem>Imports</TopListItem>
        <TopListItem>Analysis</TopListItem>
    
    </TopList>
    </>
  )
}
const TopList =styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
    list-style: none;
    padding: 5px;
   
    width:100%;
    height:30px;

`
const TopListItem=styled.li`
        color:black;
        cursor: pointer;
      font-size:20px;
       border-bottom:${props => props.purple ? " 2px solid purple" : "white"};
        padding-right:${props => props.purple ? " 80px" : "0"};
     
        
       
`
export default TopContent