import './styles/button.scss'

const Button = (props) => {
    return (
        <div className='button-main-container'>
            <button onClick={props.clickFn}>{props.icon}{props.name}</button>
        </div>
    )
}

export default Button