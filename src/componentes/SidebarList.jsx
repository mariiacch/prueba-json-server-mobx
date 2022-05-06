import React from 'react'
import styled from 'styled-components'
import SidebarListItem from './SidebarListItem'
import {ReactComponent as SvgStructure} from './../Icons/Structure.svg';
import {ReactComponent as SvgUserMangement} from './../Icons/UserManagement.svg';
import {ReactComponent as SvgTaxonomy} from './../Icons/Taxonomy.svg';
import {ReactComponent as SvgAutomation} from './../Icons/Automation.svg';
import {ReactComponent as SvgFormManagement} from './../Icons/FormManagement.svg';
import {ReactComponent as SvgWorkflow} from './../Icons/Workflow.svg';
import {ReactComponent as SvgSmartCapture} from './../Icons/SmartCapture.svg';
import {ReactComponent as SvgControlCentres} from './../Icons/ControlCentres.svg';
import {ReactComponent as SvgReport} from './../Icons/Reports.svg';
import {ReactComponent as SvgReportM} from './../Icons/ReportMapping.svg';
import {ReactComponent as SvgMonitoring} from './../Icons/Monitoring.svg';
import {ReactComponent as SvgUserModo} from './../Icons/UserModo.svg';
import {ReactComponent as SvgSettings} from './../Icons/Settings.svg';
import {ReactComponent as SvgLogout} from './../Icons/Logout.svg';

const SidebarList = () => {
  return (
    <>
    <ListContainer>
            <ContainItem>
            <SidebarListItem nombre="Structure"/> 
            <Containlog>  <Svg /> </Containlog>
            </ContainItem>
            
            <ContainItem> 
             <SidebarListItem nombre="User Management"/>    
             <Containlog> <SvgUserM/></Containlog>
            </ContainItem>

            <ContainItem>  
            <SidebarListItem nombre="Taxonomy"/> 
            <Containlog>
                <SvgTaxo/>
            </Containlog>
            </ContainItem>
            
            <ContainItem active> 
            <SidebarListItem  nombre="Automation"/>
            <Containlog>
                <SvgAut/>
            </Containlog>
            </ContainItem>

            <ContainItem>
            <SidebarListItem nombre="Form Management"/>
            <Containlog>
                <SvgForm/>
            </Containlog>
            </ContainItem>
        
            <ContainItem>
            <SidebarListItem nombre="Workflow"/>
                <Containlog>
                <SvgWork/>
                </Containlog>
            </ContainItem>

            <ContainItem>
            <SidebarListItem nombre="Smart Capture"/>
            <Containlog>
                <SvgSmart/>
            </Containlog>
            </ContainItem>

            <ContainItem>
            <SidebarListItem nombre="Control Centres"/>
            <Containlog>
                <SvgControl/>
            </Containlog>
            </ContainItem>
        
            <ContainItem>
            <SidebarListItem nombre="Reports"/>
            <Containlog>
                <SvgRep/>
            </Containlog>
            </ContainItem>
            
            <ContainItem>
            <SidebarListItem nombre="Report Mapping"/>
            <Containlog>
                <SvgRM/>
            </Containlog>
            </ContainItem>

            <ContainItem>
            <SidebarListItem nombre="Monitoring"/>
            <Containlog>
                <SvgM/>
            </Containlog>
            </ContainItem>
        
            <ContainItem>
            <SidebarListItem nombre="User Mode"/>
            <Containlog>
                <SvgUM/>
            </Containlog>
            </ContainItem>

            <ContainItem>
            <SidebarListItem nombre="Settings"/>
            <Containlog>
                <SvgSet/>
            </Containlog>
            </ContainItem>
           
            <ContainItem>
            <SidebarListItem nombre="Logout"/>
            <Containlog>
                <SvgLog/>
            </Containlog>
            </ContainItem>

    </ListContainer>
    </>
  )
}

const ListContainer =styled.ul`
    list-style: none;
    padding: 5px;

`
const Svg = styled(SvgStructure)``
const SvgUserM=styled(SvgUserMangement)``
const SvgTaxo= styled(SvgTaxonomy)``
const SvgAut=styled(SvgAutomation)``
const SvgForm=styled(SvgFormManagement)``
const SvgWork=styled(SvgWorkflow)``
const SvgSmart=styled(SvgSmartCapture)``
const SvgControl=styled(SvgControlCentres)``
const SvgRep=styled(SvgReport)``
const SvgRM=styled(SvgReportM)``
const SvgM=styled(SvgMonitoring)``
const SvgUM=styled(SvgUserModo)``
const SvgSet=styled(SvgSettings)``
const SvgLog=styled(SvgLogout)``

const ContainItem= styled.div`
display:flex;
justify-content:space-between;

background-color: ${props => props.active ? "#f1ebfe" : "white"};
border-radius:10px;
//width:100%;
padding:2px;
&&:hover{
    cursor:pointer;
    transform: ${props => props.active ? "translateX(1em)" : "translateX(0em)"};
     
}
`
const Containlog= styled.span`
color:purple;
width: 20px;
	max-height: 100px; 
	margin-bottom: 20px; 
`





export default SidebarList

