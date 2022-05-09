import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {ReactComponent as SvgCheck} from './../Icons/Check.svg';
import BarraBuscadora from './BarraBuscadora';
import axios from 'axios'
import { useCustomStore } from '../CustomContext';
import Scroll from '../StyleElements/Scroll';
import TableItem from '../StyleElements/TableItem';
import Tablebody from '../StyleElements/TableBody';
import TableItemWrap from '../StyleElements/TableItemWrap';

//url
const customersUrl="http://localhost:5000/customers"

const TableContent = () => {

     //data state:
const [data,setData]= useState([]);


//metodo para traer la data:
const getCus= async()=>{
  const res= await axios.get(customersUrl)
  try{
    setData(res.data);
   // console.log(res.data)
  
  }catch(err){
   console.log(err)
  }
}

useEffect(()=>{
  getCus();

},[])



 //estado global:
 const customStore=useCustomStore()

  return (
   <>
        <BarraBuscadora/>
        <ContainerTable>   
          <div>
              <TopTable>
                  <span>     
                      id
                      </span>
                  <span>Name</span>
                  <span>Assist Type</span>
                  <span>Enabled</span>
              </TopTable>
            {data && //customStore.addCustom(data.id)
            data.map((data)=>(


              <Tablebody key={data.id}>
                <TableItemWrap onClick={()=>customStore.addCustom(data)}>
                <TableItem item  >
                    
                    <span> {data.id}</span>
                   
                    
                    </TableItem>
                
                
                <TableItem >{data.name}</TableItem>
                <TableItem>{data.assistType}</TableItem>
                <TableItem><Check/></TableItem>
                </TableItemWrap>
              </Tablebody>
              

            ))}
          </div>
          
          
      </ContainerTable>
      
    
        </>
        
  )
}


const ContainerTable=styled(Scroll)`  
    height:155px; 
    `
const Check=styled(SvgCheck)`
width:20px;

`
const TopTable=styled.div`
display:flex;
width:100%;
justify-content:space-between;
span{
   font-weight:700;
    width:150px;
    text-align:center;
}

    
`





export default TableContent