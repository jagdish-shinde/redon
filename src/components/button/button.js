import style from './button.module.css'


export default function Button ({buttonText,buttonStyle}) {


    return(
        <button className={`${style.button} ${buttonStyle}`}>
            {buttonText || 'Get Started'}
        </button>
    )
}