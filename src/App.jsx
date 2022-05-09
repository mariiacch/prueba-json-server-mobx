import React from 'react';
import styled from 'styled-components'
import './App.css';
import Sidebar from './componentes/Sidebar';
import Topbar from './componentes/Topbar';
import TopContent from './componentes/TopContent';
import CustomForm from './componentes/CustomForm';
import TableContainer from './componentes/TableContainer';
import { Observer } from "mobx-react-lite"




function App() {




  return (
 
      <Observer>
            {() => (
              <>
              
                  <Topbar/>
              <Container>
              <Sidebar/>
            <Wrapper> 
                <h2>Automation</h2> 
                  <ContainLayout>
                  <TopContent/>
                  <WrapperContent>
                    <TableContainer/>
                    <CustomForm/>
                  </WrapperContent>
                  </ContainLayout>
            </Wrapper>
        </Container>
            </>
               
            )}
        </Observer>
     
   
  
    
  );
}
/**
 * 
 * 
 * 
 */
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
  width: 100%;
  
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
  width: 98%;
  margin: 0 auto;
  
  background-color:white;
  height:500px;
  border-radius:10px;
  padding:10px;
 

`

const WrapperContent =styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background-color:white;
  height:300px;
  border-radius:10px;
  padding:10px;
`
export default App;
