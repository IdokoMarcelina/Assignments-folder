


export default function Cards(props) {
  return (
    <div className={`card ${props.blogcontainer}`}>
        
        <div className="right">
            <img src={props.image} alt="" />
        </div>

      <div className="left">
      <h2>{props.title}</h2>
      <p><strong>Author:</strong> {props.author}</p>
      <p><strong>Date:</strong> {props.date}</p>
      <div className="content">
     <p>{props.content}</p>
      </div>
      </div>

    </div>
  )
}
