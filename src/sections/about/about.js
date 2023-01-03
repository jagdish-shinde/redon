import style from './about.module.css'
import Button from '../../components/button/button'
import motivator from '../../../src/images/motivator.png'



export default function About () {

    return(
        <section className={style.wrapper}>

            <div className={style.leftSec}>
                <img
                    src={motivator}
                    alt = 'gym motivation Image'
                    height='100%'
                    width = '100%'

                />
            </div>

            <div className={style.rightSec}>
                If you want something you've never had, you must be willing to do something you've never done.
                <Button
                    buttonStyle = {style.buttonStyle} 
                    buttonText = 'Know More ...'
                />
            </div>
            
        </section>
    )
}