import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

function FormComponent() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const { setData } = useContext(DataContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setData({ input1, input2 })
    navigate('/output')
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="enter something"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="enter something"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      /><br /><br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormComponent
