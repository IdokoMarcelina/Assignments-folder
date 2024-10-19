
import Audiophile from '../assets/Audiophile.svg';
import Databiz from '../assets/Databiz.svg';
import Maker from '../assets/Maker.svg';
import Meet from '../assets/Meet.svg';

function Footer() {
  return (
    <div className='footerImages'>
        <img className='myimage' src={Databiz} alt="" />
        <img className='audiophile' src={Audiophile} alt="" />
        <img className='myimage' src={Meet} alt="" />
        <img className='myimage' src={Maker} alt="" />

    </div>
  )
}

export default  Footer;