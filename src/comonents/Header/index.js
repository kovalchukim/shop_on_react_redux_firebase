import './styles.scss'
import logo from '../../assets/logo.png'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="Test LOGO"/>
                </div>
            </div>
        </header>
    )
}

export default Header

