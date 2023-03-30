import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

import './styles.scss'


const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Test LOGO"/>
          </Link>
        </div>
        <div className="callActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

