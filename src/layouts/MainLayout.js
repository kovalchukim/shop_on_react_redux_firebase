import Header from "../comonents/Header";
import Footer from "../comonents/Footer";


const MainLayout = props => {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout;
