import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function OutputComponent() {
  const { data } = useContext(DataContext)

  return (
    <div>
      <p> {data.input1}</p>
      <p> {data.input2}</p>
    </div>
  )
}

export default OutputComponent
