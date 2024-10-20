



export default function Cards(props) {
  return (

  
    <div className={`card ${props.cardContainer}`}>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="price">{props.price}</p>
    </div>
    
  )
}
