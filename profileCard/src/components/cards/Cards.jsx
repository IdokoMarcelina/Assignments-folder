import '../cards/Cards.css';

export default function Cards(props) {
  return (

    <>


    <div className={`cardContainer ${props.cardMain}`}>
        <img src={props.image} alt="" />
        <div className={`info ${props.info}`}>
        <h2>{props.yourname}</h2>
        <p>{props.age}</p>
        <p>{props.location}</p>
        </div>
    </div>



    </>
  )
}
