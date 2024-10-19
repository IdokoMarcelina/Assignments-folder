import './App.css'
import Header from './components/Header'
import Leftbar from './components/Leftbar'
import RightBar from './components/RightBar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>

        <div className="container">
        <Leftbar/>
        <RightBar/>
        </div>
      

    </>
  )
}

export default App
