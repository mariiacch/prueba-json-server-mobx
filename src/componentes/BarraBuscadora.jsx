import React from 'react'
import styled from 'styled-components'
import {ReactComponent as SvgExport} from './../Icons/Export.svg';
import {ReactComponent as SvgSearch} from './../Icons/Search.svg';

const BarraBuscadora = () => {
  return (
    <BarraContainer>
        <WrapperBarra> 
        <ContainText>
            <Export/>
            <p>Excel Export</p>
            
        </ContainText>
        <ContainBuscador>
            <InputSearch placeholder='Search' />
            <SvgS/>
        </ContainBuscador>
        </WrapperBarra>
    </BarraContainer>
  )
}
const BarraContainer=styled.div`
display:flex;
    width:100%;
    height:50px;
    justify-content:space-between;
`
const WrapperBarra=styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
padding:10px;
    
`
const ContainText=styled.div`
display:flex;
p{
    color:#6b6b6b;
}
`

const ContainBuscador=styled.div`
border-bottom:1px solid #6b6b6b;
`

const InputSearch=styled.input`
border:none;
outline:none;

    
`

const Export=styled(SvgExport)`
    width:17px;
    margin-right:5px;
    color:#6b6b6b;
`
const SvgS= styled(SvgSearch)`
    width:17px;
    margin-right:5px;
    color:#6b6b6b;
`

export default BarraBuscadora