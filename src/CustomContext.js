import { useLocalObservable } from "mobx-react";
import React from "react";
import { useContext } from "react";
import { createCustomStore } from "./CustomStore";

//creo el context
const CustomContext=React.createContext(null)

//creo el provider
export const CustomProvider=({children})=>{
    const customStore= useLocalObservable(createCustomStore);

    return <CustomContext.Provider value={customStore}>
        {children}
    </CustomContext.Provider>

}

//hook para usar el context
export const  useCustomStore=()=>useContext(CustomContext)

