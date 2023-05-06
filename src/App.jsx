import Router from './Router/Router'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './contex/dataContex';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </DataProvider>
  )
}

export default App
