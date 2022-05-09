import React from 'react'
import styled from 'styled-components'
import {ReactComponent as SvgArrow} from './../Icons/ArrowDown.svg';
import TableContent from './TableContent';
import Button from '../StyleElements/Button'
import TopTable from '../StyleElements/TopTable'

const TableContainer = () => {
  return (
    <>
    <Container> 
        < Wrapper>
        <TopTable>
          <h3>Manage the actions</h3>
          <Button>Create Assist <SvgArr/></Button>
        </TopTable>

        <TableContent/>
        </Wrapper>
    </Container>
    
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
  `


  const SvgArr = styled(SvgArrow)`
  width:12px;
  margin-left:2px;
  `

export default TableContainer