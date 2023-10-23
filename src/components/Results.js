import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContexte } from '../contexts/ResultContexteProvider'
const Results = () => {
  const {getResults, results, searchTerm, setSearchTerm, isLoading} = useResultContexte()
  const location = useLocation();

  if (isLoading) return <Loading/>
  return (
    <div>Results</div>
  )
}

export default Results