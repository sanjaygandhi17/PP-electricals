// create a context(data warehouse) done as in line 5
// then we need a provider---provider takes the data from context(warehouse) and provides it to the consumer done in line 7
// consumer--one which requests the data--calls for data --useContext (hook)
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import data from './data';
const AppContext = React.createContext();
const API = '';
const initialState = {
  name: '',
  image: '',
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: 'HOME_UPDATE',
      payload: {
        name: 'PP Electricals',
        image: './images/ShopImage.png',
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: 'ABOUT_UPDATE',
      payload: {
        name: 'PP Electricals',
        image: './images/ShopImage.png',
      },
    });
  };
  //to get the api data

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'GET_SERVICES', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  //to call the API
  useEffect(() => {
    getServices(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
}; //we have basically AppContext.Provider and AppContext.Consumer

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
