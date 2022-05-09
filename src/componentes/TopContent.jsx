import React from 'react'
import styled from 'styled-components'

const TopContent = () => {
  return (
    <ContainItems>
    <TopList>
        <TopListItem purple>Assist</TopListItem>
        <TopListItem>Triggers</TopListItem>
        <TopListItem>Actions</TopListItem>
        <TopListItem>Transfers</TopListItem>
        <TopListItem>Imports</TopListItem>
        <TopListItem>Analysis</TopListItem>
    
    </TopList>
    </ContainItems>
  )
}
const ContainItems=styled.div`
display:flex;
align-items:center;
justify-content:Center;
  //width:100%;
  padding:0px;

`
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
display:flex;
width:100px;
align-items:center;
color:black;
cursor: pointer;
font-size:17px;
border-bottom:${props => props.purple ? " 2px solid purple" : "white"};

     
        
       
`
export default TopContent