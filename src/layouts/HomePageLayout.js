import Header from "../comonents/Header";
import Footer from "../comonents/Footer";


const HomePageLayout = props => {
  return (
    <div className="fullHeight">
      <Header />
        {props.children}
      <Footer />
  </div>
  )
}

export default HomePageLayout;
