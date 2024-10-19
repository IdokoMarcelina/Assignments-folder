import './Footer.css';
import Twiter from '../../assets/icons/twitter.png'
import Facebook from '../../assets/icons/facebookblack.png';
import Pinterest from '../../assets/icons/pinterest.png'
import Insta from '../../assets/icons/ig.png';


export default function Footer() {
  return (

    <>
    <div className="footerContainer">
        <div className="one">
            <h5>Tools</h5>
            <p>Generate Your palettes</p>
            <p>Explore Popular Palettes</p>
            <p>Extract palette from image</p>
            <p>Contrast checker</p>
            <p>Preview palettes on designs</p>
            <p>Recolor your own design</p>
            <p>Color picker</p> 
            <p>Browse free fonts</p>
        </div>
        <div className="one">
            <h5>More</h5>
            <p>List of Colors</p>
            <p>Browse gradient</p>
            <p>Create a gradient</p>
            <p>Make a gradient palette</p>
            <p>Image conveter</p>
            <p>Create a collage</p>
            <p>Font Generator</p> 
        </div>
        <div className="one">
            <h5>Jobs</h5>
            <p>Find your next job</p>
            <p>Post a job</p>
            
            <div className="one">
            <h5>Apps</h5>
            <p>iOS App</p>
            <p>Andriod App</p>
            <p>Figma Plugin</p>
            <p>Adobe Extension</p>
            <p>Chrome Extension</p>
            <p>Instagram Page</p> 
        </div>
        </div>

        
        <div className="one">
            <h5>Company</h5>
            <p>Pricing</p>
            <p>License</p>
            <p>Terms of service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Manage cookies</p>
            <p>Help center</p> 
            <p>Advertise</p>
            <p>Affiliate</p>
            <p>Contact</p>
        </div>
        
    </div>

    <hr />
    
    <div className="last">
    <p className='copy'>&copy; Coolors by <span>Marcelina Idoko.</span> from a creative to all the others.</p>

      <div className="rightLast">
      <img src={Twiter} alt="" />
        <img className='facebook' src={Facebook} alt="" />
        <img src={Pinterest} alt="" />
        <img src={Insta} alt="" />
      </div>
    </div>
    </>
  )
}
