import Buttons from "../Buttons"
import '../hero/Hero.css';
import Product from '../../assets/icons/badge.svg'
import Picture from '../../assets/images/design.jpg';

export default function Hero() {
  return (
    <>
      <div className="container">

        <div className="leftHero">
          <h1>The Super fast color
            palettes generator!
          </h1>
          <p>Create the perfect palette or get inspired
             by thousands of beautiful color
              schemes.</p>
          <Buttons buttonstyle='heroButton' text="Start the generator"/>
          <Buttons buttonstyle='heroButton2' text="Explore trending palettes"/>
          <img className="product" src={Product} alt="" />
        </div>


        <div className="rightHero">
          <img src={Picture} alt="" />
        </div>


      </div>
    </>
  )
}
