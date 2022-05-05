import React,{useState,useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import './App.css';
import Header from './componentes/Topbar';
import Sidebar from './componentes/Sidebar';
import Topbar from './componentes/Topbar';

//url
const customersUrl="http://localhost:5000/customers"



function App() {
  //data state:
const [data,setData]= useState([]);

//metodo para traer la data:
const getCus= async()=>{
  const res= await axios.get(customersUrl)
  try{
    setData(res.data);
    console.log(res.data)
  
  }catch(err){
   console.log(err)
  }
}
useEffect(()=>{
  getCus();


},[])

  return (
    <>
     <Topbar/>
     <Container>
     
      <Wrapper>  <Sidebar/></Wrapper>
     
    </Container>
    </>
    
  );
}

// estilos
const Container =styled.div`
    display: flex;
    
    margin-top: 25px;
    height: 100vh;
    //width: 100vw;  
    z-index: -1; 
    border:1px solid;
     
  `

const Wrapper =styled.div`
display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  width: 100%;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  //padding: 20px;

`
export default App;
