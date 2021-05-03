import React, { createContext, useContext, useReducer } from 'react';

//Prepare the DataLayer
export const StateContext = createContext();
//Wrap ur app and providethe dataLayer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);
// pull data from datalayer 
export const useStateValue = () => useContext(StateContext);
