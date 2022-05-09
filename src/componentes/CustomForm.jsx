import React,{useState} from 'react'
import styled from 'styled-components'
import Button from '../StyleElements/Button';
import TopTable from '../StyleElements/TopTable';
import {ReactComponent as SvgArr} from './../Icons/ArrowDown.svg';
import Modal from './Modal';
import Prueba from './Prueba';
import SettingsList from './SettingsList'

const CustomForm = () => {
  //open modal
  const [openModal,setOpenModal]=useState(false)

  const handleOpenM=()=>{
    setOpenModal(!openModal)
  }
 
 return (
    <>
    <Container>
      <Wrapper> 
      <TopTable>
          <h3>Properties</h3>
          <Button 
          onClick={()=>handleOpenM()}> Settings <SvgA/></Button>
        </TopTable>
  
        
        <Prueba />
  
      </Wrapper>
    </Container>
    {openModal &&(

      <Modal> 
        <SettingsList setOpenModal={setOpenModal}  openModal={openModal}/>
      </Modal>
)

}
    
    </>
  )


}

// estilos
const Container =styled.div`
    display: flex;
   
    flex:2;
     
  `
  const Wrapper=styled.div`
  width:100%;
  margin-left:15px;
`


  const SvgA=styled(SvgArr)`
width:12px;
  margin-left:2px;
  
  `
export default CustomForm