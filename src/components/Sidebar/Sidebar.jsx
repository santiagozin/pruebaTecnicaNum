import './style.css'
import logo from '../../assets/img/logo-num.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faChartLine,
  faMagnifyingGlassChart,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = ({openSidebar, setOpenSidebar}) => {


  const _handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className={`sidebar ${openSidebar ? 'close' : ''}`}>
      <div className="top">
        <img src={logo} alt="logo" width={50} className="img-logo" />
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="icon"
          onClick={_handleOpenSidebar}
        ></FontAwesomeIcon>
      </div>
      <div className="center">
        <ul>
          <li>
            <NavLink className="item" to="/Dashboard">
              <FontAwesomeIcon
                icon={faChartLine}
                className="icon"
              ></FontAwesomeIcon>{' '}
              {!openSidebar && <span>Dasboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink className="item" to="CompraVenta">
              <FontAwesomeIcon
                icon={faMagnifyingGlassChart}
                className="icon"
              ></FontAwesomeIcon>{' '}
              {!openSidebar && <span>Compra / Venta</span>}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="botom">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="icon"
            onClick={_handleOpenSidebar}
          ></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Sidebar
