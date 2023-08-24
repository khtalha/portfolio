import { createContext,useContext,useState } from "react";

const StateContext = createContext();

const initialState = {
    active : 'About'
}
export const ContextProvider = ({children})=>{
    const [active,setActive]=useState(initialState);
    return (
    <StateContext.Provider
    value = {{
        active,
        setActive
    }}
    >
        {children}
    </StateContext.Provider> );
}

export const useStateContext=()=>{
    useContext(StateContext);
}
