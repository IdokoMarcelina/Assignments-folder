import '../home/Home.css';
import Cards from '../../components/cards/Cards';
import Image from '../../assets/mimitwo.jpg'
import Alice from '../../assets/alice.jpg'

export default function Home() {
  return (
    <div className="main">

    <Cards  
        cardMain="cardContainer"
        image={Image}
        yourname="Marcelina Idoko"
        age="16"
        location="Lagos,Nigeria"
    />
    <Cards  
        cardMain="cardContainer2"
        image={Alice}
        yourname="Alice Otaru"
        age="18"
        location="Enugu,Nigeria"
    />
    </div>
  )
}
