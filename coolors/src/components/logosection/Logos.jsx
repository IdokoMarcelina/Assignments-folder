import './logos.css'
import Disney from '../../assets/icons/disney.svg';
import Dream from '../../assets/icons/dream.svg';
import Warner from '../../assets/icons/warnerbros.jpeg'
import Netflix from '../../assets/icons/netflix.svg'
import Airbnb from '../../assets/icons/airbnb.svg'
import Dropbox from '../../assets/icons/dropbox.svg'
import Hasbro from '../../assets/icons/hasbro.png';
import Ubisoft from '../../assets/icons/ubisoft.svg';
import EA from '../../assets/icons/EA.png'
import Apple from '../../assets/icons/apple.svg';
import Windows from '../../assets/icons/windows.svg'



export default function Logos() {
  return (
    <div className='main'>

        <h6>Used by 5+ million designers and by top companies</h6>
        <div className="logoContainer">
            <img src={Disney} alt="" />
            <img src={Dream} alt="" />
            <img src={Warner} alt="" />
            <img src={Netflix} alt="" />
            <img src={Airbnb} alt="" />
            <img src={Dropbox} alt="" />
            <img src={Hasbro} alt="" />
            <img src={Ubisoft} alt="" />
            <img src={EA} alt="" />
            <img src={Apple} alt="" />
            <img src={Windows} alt="" />
        </div>
    </div>
  )
}
