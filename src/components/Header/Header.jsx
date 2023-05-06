import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faCircleUser} className='icon'></FontAwesomeIcon>
    </div>
  )
}

export default Header
