import React, { useMemo } from 'react'

import Filters from './components/Filters/Filters'
import Table from './components/Table/Table'

import useFetch from './hooks/useFetch'
import URL from './constants'
import useFilterStore from './store'
import filterData from './utils'
import { IPassenger } from './types'

import './App.scss'

function App() {
  const { data, loading, error } = useFetch<IPassenger[]>(URL)
  const filter = useFilterStore.use.filter()

  const filteredData = useMemo(() => filterData(data, filter), [data, filter])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <Filters />
      <Table passengers={filteredData} />
    </>
  )
}

export default App
