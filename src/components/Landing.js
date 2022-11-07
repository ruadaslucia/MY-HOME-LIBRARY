
import'../styles/layouts/landing.scss';
import Header from "./Header";
import Footer from "./Footer";

function Landing() {
  return (
    <>
    <Header/>
    <div className='landing'>      
      <h2 className='landing__title'>my home books</h2>
      <button className='landing__button'>descubre mi colección</button>      
    </div>
    <Footer/></>
  );
}

export default Landing;
