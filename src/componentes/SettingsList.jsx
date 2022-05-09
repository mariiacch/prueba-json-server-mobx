import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Button from '../StyleElements/Button';
import PopUp from '../StyleElements/PopUp';


const SettingsList = ({setOpenModal,openModal}) => {
  const [data,setData]=useState()
  //url
const settingsUrl="http://localhost:5000/names"

const getData=async()=>{
  const res= await axios.get(settingsUrl)
  try{
    setData(res.data);
    //console.log(res.data)
  
  }catch(err){
   console.log(err)
  }
} 
useEffect(()=>{
  getData()

},[])


const handleCloseM=()=>{
  setOpenModal(!openModal)
}



//array de desc
const [descriptions,setDescriptions]= useState()

let initialState={
  name:"",
  description:"",
  settings:"",
}
//estado inicial 
const [allData,setAllData]= useState(initialState)
let {name,description,settings}=allData;

const [SelectName,setSelectName]= useState(-1)


//metodo q esoera el cambio del select de los names
const handleVerificarName=(e)=>{

  setAllData({
    ...allData
  })
}

//metodo onchange
const handleInputChange=(e)=>{
  const {name, value}= e.target;
  setAllData({...allData, [name]:value})
  console.log(allData)
}

const handlerCargarSelectName=(e)=>{
  const opcion= e.target.value;
console.log(opcion)
setSelectName(opcion);


}


  return (
    <PopUp>
      <ContainerSettings> 
      <h3>Names</h3>
      <Select
      name="name" 
      id="nameSelect"
      value={name}
      onChange={handleInputChange}
       onClick={handlerCargarSelectName}>
        <option value={-1}>----- </option>
        {
          data &&
          data.map((data,i)=>{
            return(    
                <option key={"name" + i} value={i}>{data.name}</option>
            ) 
          })


        }
      </Select>
     {/* <span>{SelectName}</span>*/}
     
        <h3> Settings</h3>
      
        
        <Select
         name='settings'
          id='selsettings'
          value={settings}
          onChange={handleInputChange}
          onClick={handleVerificarName}
          >
            <option value=""> ---- </option>
          {
            SelectName > -1 &&
            data[SelectName].settings.map((item,i)=>{
              return <option key={"settings" + i}>{item.displayName}</option>
            })
            
        }
        </Select>

        <ContainerButtons>
        <Buttton> Agregar</Buttton>
        <Buttton2 onClick={()=>handleCloseM()}> Cancelar</Buttton2>

        </ContainerButtons>
        
      </ContainerSettings>
      
     
      </PopUp>
  )
}

const ContainerSettings=styled.div`
  display:flex;
  flex-direction:column;
  padding:20px;

`

const ContainerButtons=styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  

`
const Buttton=styled(Button)`
margin-top:10px;
cursor:pointer;

`

const Buttton2=styled(Buttton)`
background-color:red;
cursor:pointer;
`
const Select=styled.select`
border-radius:10px;
  padding:10px;
  cursor:pointer;
`
export default SettingsList;