import './style.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div>
      <Header />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className={`data-visible ${!openSidebar ? "m-300" : ""}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
