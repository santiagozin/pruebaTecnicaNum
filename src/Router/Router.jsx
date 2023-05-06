import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import CompraVenta from '../components/CompraVenta/CompraVenta'
import Dashboard from '../components/Dashboard/Dashboard'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<CompraVenta />} />
            <Route path="/CompraVenta" element={<CompraVenta />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
