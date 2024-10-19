

export default function Cards(props) {
  return (
    <div className={`cards ${props.container}`}>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}
