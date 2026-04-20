import './styles/displayCard.scss'

const DisplayCard = (props) => {
  return (
    <div className='display-card-container'>
      <div className="heading">{props.heading}</div>
      <div className="data-with-icon">
        <div className="number">{props.number}</div>
        <div className="icon">{props.icon}</div>
      </div>
    </div>
  )
}

export default DisplayCard