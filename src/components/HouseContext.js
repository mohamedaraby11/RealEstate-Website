import React,{useState,useEffect,createContext} from 'react';

// import data
import {housesData} from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {

  const [houses,setHouses] = useState(housesData);
  const [country, setCountry] = useState('location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  // retun All Countries 
  useEffect (()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    },[]);
    // remove Duplicates
    const uniqueCountries = [' Location(any)', ...new Set (allCountries)];

    // set countries state

    setCountries(uniqueCountries)

  },[]);

  return ( <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading
  }}>
  {children}
  </HouseContext.Provider>
  );
}

export default HouseContextProvider;
