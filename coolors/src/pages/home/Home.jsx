import Hero from "../../components/hero/Hero"
import IconSection from "../../components/iconSection/IconSection"
import Logos from "../../components/logosection/Logos"
import Footer from "../../static.jsx/footer/Footer"
import Header from "../../static.jsx/header/Header"


export default function Home() {
  return (
    <div>

      <Header/>
      <Hero/>
      <IconSection/>
      <Logos/>
      <Footer/>

    </div>
  )
}


