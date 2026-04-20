import './styles/button.scss'

const Button = (props) => {
    return (
        <div className='button-main-container'>
            <button>{props.icon}{props.name}</button>
        </div>
    )
}

export default Button