import styles from './hero.module.css'
import ideal from '../../images/gymIdeal.jpg'
import Button from '../../components/button/button'

export default function HeroSection () {

    return (
        <div className={styles.wrapper}>
            
            <img 
                src={ideal} 
                className = {styles.ideal}
                height ='100%'
                width = '100%'
            />
          
            <div className={styles.btnContainer}>

                    <p className={styles.para}>
                    <span className={styles.tagLine}>
                    Hustle to gain more muscle.
                    </span>  Improve yourself. Bodies of stamina & strength. Forever fit, forever strong!
                    </p>
                    <Button 
                        buttonStyle={styles.buttonStyle}
                    />
            </div>
        
        </div>
    )
}