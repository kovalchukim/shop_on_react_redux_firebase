import ShopMen from '../../assets/forMen.jpg'
import ShopWomen from '../../assets/forWomen.jpg'
import './styles.scss'


const Directory = props => {

    return (
        <div className="directory">
            <div className="wrap">
                <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
                    <a href="/">Shop Women</a>
                </div>
                <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
                    <a href="/">Shop Men</a>
                </div>
            </div>
        </div>
    )
}

export default Directory
