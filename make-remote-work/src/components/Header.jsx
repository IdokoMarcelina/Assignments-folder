

function Header() {
  return (
    <div className="headerDiv">
       <div className="rightHeader">
            <div className="snap">
            <h1>Snap</h1>

            </div>
            <div className="headerchildren">
            <select name="" id="">
                <option value="">Features</option>
                </select>

            <select name="" id="">
            <option value="">Company</option>
                </select>

            <a href="">Careers</a>
            <a href="">About</a>
            </div>
       </div>

       <div className="leftHeader">
        <a href="">Login</a>
        <button className="register">Register</button>
       </div>
        
    </div>
  )
}

export default  Header;
