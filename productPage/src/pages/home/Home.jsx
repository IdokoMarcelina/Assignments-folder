import '../home/Home.css'
import Cards from '../../components/Cards'
import Baklave from '../../assets/baklava.jpg'
import Brownie from '../../assets/cake.jpg';
import Creme from '../../assets/creme.jpg';
import Macaron from '../../assets/macaron.jpg';
import Panna from '../../assets/panna.jpg';
import Tiramisu from '../../assets/tiramisu.jpg';
import Waffle from '../../assets/waffle.jpg';


export default function Home() {
  return (
    <>
    <div className="main"> 

        <Cards 
          cardContainer="cardContainer"
          image={Baklave}
          title ="Waffle"
          description="Waffle with Berries"
          price="$6.50"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Brownie}
          title ="Brownie"
          description="Salted caramel brownie"
          price="$7.50"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Creme}
          title ="Creme"
          description="Vanilla Bean bruee"
          price="$4.50"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Macaron}
          title ="Macaron"
          description="Macaroon Mix of Five"
          price="$8.00"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Panna}
          title ="Panna"
          description="vanilla Panna Cotta"
          price="$9.00"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Tiramisu}
          title ="Tiramisu"
          description="Classic Tiramisu"
          price="$9.00"

        />
        <Cards 
          cardContainer="cardContainer"
          image={Waffle}
          title ="Waffle"
          description="Waffle with Berries"
          price="$5.00"

        />


    </div>
    </>
  )
}
