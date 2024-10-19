import Logo from "../../assets/icons/logo.svg";
import Buttons from "../../components/Buttons";
import '../header/Header.css'

export default function Header() {
  return (
    <div>
        <nav>
            <img src={Logo} alt="" />
            <div className="rightNav">
                <a href="">Tools</a>
                <a className="goPro" href="">Go Pro</a>
                <hr />
                <a href="">Sign in</a>
                <Buttons buttonstyle='signUp' text='Sign Up' />
            </div>
        </nav>
    </div>
  )
}
