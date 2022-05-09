import { makeAutoObservable } from "mobx"
import { useState } from "react"
//creo store
 export function createCustomStore() {
   

     return{
        
        custom: [{
            id:'',
            name:'',
            description:'',
            assistType:'',
        }],
        dataC:true,
     
     
        addCustom(data){

            
            this.custom=this.custom.concat(data)
            
            this.dataC= true;
        
           console.log(this.custom,data)
           
           
            
        },
       
        

        
     }
 }

 /*
 
 */