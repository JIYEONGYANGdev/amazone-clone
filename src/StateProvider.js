// keep track user state information
// We need this to track the basket

// React Context API
import React, { createContext, useContext, useReducer } from 'react';

// setup data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        {/* <App> <- index.js 가봐 */}
        </StateContext.Provider>
)

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)