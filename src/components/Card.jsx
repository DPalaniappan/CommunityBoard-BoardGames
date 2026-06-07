import '../styles/Card.css';
const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <h4>{props.genre}</h4>
     <a href={props.how_to_play_url} className="card-button">How to Play</a>
    </div>
  )
}

export default Card;
