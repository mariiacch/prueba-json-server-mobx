import React from 'react'
import { useCustomStore } from '../CustomContext';
import { Observer } from "mobx-react-lite"
import Tablebody from '../StyleElements/TableBody';
import TableItem from '../StyleElements/TableItem';
import TableItemWrap from '../StyleElements/TableItemWrap';
import styled from 'styled-components';
import Scroll from '../StyleElements/Scroll';


const Prueba = () => {
     //estado global:
 const customStore= useCustomStore()

 
  return (
    <>
      <Observer>
            {() => (
              <>
              <ContainerTable>
              {
                customStore.dataC ?
                customStore.custom.map((data)=>{
                 
                  return(
                    <TableAdd key={data.id}>
                      <TableItemWrap>
                        
                        <TableItemL >{data.id}</TableItemL>
                        
                        <TableItemL>{data.name}</TableItemL>
                       <TableItemL>{data.description}</TableItemL>
                       
                      
                       </TableItemWrap>
                    </TableAdd>
                  )
                })
              
                : <div> undefined</div>
              }
             
              
              </ContainerTable>
           
          
            </>
               
            )}
        </Observer>
      
     
</>
  )
}
const TableItemL=styled(TableItem)`
font-size:13px;
`
const TableAdd= styled(Tablebody)`
//border:1px solid;
justify-content:space-around;
text-align:start;

`
const ContainerTable=styled(Scroll)`  
//width:420px;
    height:200px; 
    `

export default Prueba