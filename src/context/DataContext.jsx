import { createContext, useState } from 'react'

export const DataContext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState({
    input1: '',
    input2: ''
  })

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
