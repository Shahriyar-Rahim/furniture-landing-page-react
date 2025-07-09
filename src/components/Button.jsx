import buttonarrow from '../assets/button-icon.png'

const Button = ({ text }) => {
    return (
        <div>
            <button className=' text-sm text-primary flex items-center gap-1'>
                {text}
                <img src={buttonarrow} alt="arrow" />
            </button>
        </div>
    )
}

export default Button