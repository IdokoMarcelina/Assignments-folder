
import Button  from "./button"; 
import GetText from "./GetText";
import MakeRemoteText from "./MakeRemoteText";
import Footer from "./Footer";
 function Leftbar() {
  return (

    <div className="textContainer">
        <MakeRemoteText/>

        <GetText/>
        

        <Button/>

        <Footer/>
        
    </div>

  )
}

export default Leftbar;
