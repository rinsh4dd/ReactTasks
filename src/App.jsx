import { Routes, Route } from 'react-router-dom'
import FormComponent from './components/Form'
import OutputComponent from './components/output'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/output" element={<OutputComponent />} />
        </Routes>
      </div>
    </DataProvider>
  )
}

export default App
