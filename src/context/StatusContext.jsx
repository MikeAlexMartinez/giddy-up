import React, { useReducer } from 'react';

const TOGGLE_EVERYTHING = 'TOGGLE_EVERYTHING';
const TOGGLE_AWESOME = 'TOGGLE_AWESOME';

const initialState = {
  everything: true,
  awesome: true,
}

const statusReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_EVERYTHING: {
      return {
        ...state,
        everything: !state.everything,
      };
    }
    case TOGGLE_AWESOME: {
      return {
        ...state,
        awesome: !state.awesome,
      };
    }
    default: {
      return state;
    }
  }
}

const toggleEverything = dispatch =>
  () => dispatch({ type: TOGGLE_EVERYTHING });

const toggleAwesome = dispatch =>
  () => dispatch({ type: TOGGLE_AWESOME });

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(statusReducer, initialState);
  
  const actions = {
    toggleEverything: toggleEverything(dispatch),
    toggleAwesome: toggleAwesome(dispatch),
  }

  return (
     <Context.Provider value={{ state, ...actions }}>
       {children}
     </Context.Provider>
  )
};
