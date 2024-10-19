import './IconSection.css';
import Cards from "../Cards"
import Hcards from '../Hcards';
import Apple from '../../assets/icons/apple.svg';
import Andriod from '../../assets/icons/android.svg'
import Figma from '../../assets/icons/figma.svg'
import Adobe from '../../assets/icons/adobe.svg'
import Chrome from '../../assets/icons/chrome.svg'

export default function IconSection() {
  return (

    <>
    <div className='iconsection'>

        <Cards 
        
        image={Apple} 
        title="iOS App" 
        text="create, browse and save palettes on the go" 

         />
        <Cards 

        image={Andriod} 
        title="Andiod App" 
        text="Thousands of palettes in your pocket." 

         />
        <Cards 

        image={Figma} 
        title="Figma Plugin" 
        text="All palettes right in your workspace." 

         />
        <Cards 

        image={Chrome} 
        title="Chrome Extension" 
        text="Get and edit a palette every new tab" 

         />
        
       

        <Cards 

        image={Adobe} 
        title="Adobe Extension" 
        text="Use Coolors with your favorite tools." 

         />

         <p className='new'>New</p>
    </div>


    <div className="onHovercards">

        <Hcards
        container="bg-color1"
        titleTwo='View on the App store'
        />
        <Hcards
        container="bg-color2"
        titleTwo='View on the Play store'
        />
        <Hcards
        container="bg-color3"
        titleTwo='Install now'
        />
        <Hcards
        container="bg-color4"
        titleTwo='Add to chrome'
        />
        <Hcards
        container="bg-color5"
        titleTwo='Download'
        />
    
    </div>
    </>

  )
}
