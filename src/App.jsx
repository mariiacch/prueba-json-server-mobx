import React,{useState,useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import './App.css';

import Sidebar from './componentes/Sidebar';
import Topbar from './componentes/Topbar';
import TopContent from './componentes/TopContent';
import Table from './componentes/Table';
import CustomForm from './componentes/CustomForm';

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
     <Sidebar/>
      <Wrapper> 
      <h2>Automation</h2> 
        <ContainLayout>
        <TopContent/>
        <WrapperContent>
          <Table/>
          <CustomForm/>
        </WrapperContent>
        </ContainLayout>

         </Wrapper>
     
    </Container>
    </>
    
  );
}

// estilos
const Container =styled.div`
    display: flex;    
    height: 100vh;
    z-index: -1; 
    
  `

const Wrapper =styled.div`
display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  width: 90%;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  //padding: 20px;
  background-color:#f1ebfe;
 
 
  h2{
    margin-left:30px;
    font-weight:500;
  }

`

const ContainLayout =styled.div`
display: flex;
  flex-direction:column;
  width: 95%;
  margin: 0 auto;

  //padding: 20px;
  background-color:white;
  height:300px;
  border-radius:10px;
  padding:10px;

`

const WrapperContent =styled.div`
display: flex;
  
  width: 95%;
  margin: 0 auto;

  //padding: 20px;
  background-color:white;
  height:300px;
  border-radius:10px;
  padding:10px;
  border:1px solid #f1ebfe;
  


`
export default App;
