import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils'

import logo from '../../assets/logo.png'

import './styles.scss'


const Header = props => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Test LOGO"/>
          </Link>
        </div>
        <div className="callActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>
                  LogOut
                </span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Header)

