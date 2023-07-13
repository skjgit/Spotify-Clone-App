//6 
// VERY IMPRTANT - CONTEXT API
import React,{
    createContext,
    useContext,
    useReducer} from "react"; 


    // this is the data layer that we are creating 
    // this is used to track the user and the playlists


    export const DataLayercontext = createContext();  //createContext is used to prepare the data layer
    export const DataLayer  = ({initialState,reducer,children}) =>(
        <DataLayercontext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </DataLayercontext.Provider>
    );

    export const UseDataLayerValue = () => useContext(DataLayercontext);