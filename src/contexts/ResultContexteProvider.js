import React, {createContext, useContext, useState} from 'react'
import axios from 'axios'
const ResultContext = createContext()

const  ResultContexteProvider =  ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async(type) => {
     setIsLoading(true);
    const results = {
      method: 'GET',
      url: 'https://google-web-search1.p.rapidapi.com/',
      params: {
        query: 'World Cup',
        limit: '20',
        related_keywords: 'true'
      },
      headers: {
        'X-RapidAPI-Key': 'c8d2af3393msh023a064a315aef0p1101abjsn94dc3903ab8e',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
      }
    };
    
    
    try {
        const response = await axios.request(results);
        console.log(response.data);
        setResults(response.data);
        setIsLoading(false);
    } catch (error) {
        console.error(error);
    }

    }
  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
      {children}
    </ResultContext.Provider>
  
  )
}

export const useResultContexte =( ) => useContext(ResultContext)