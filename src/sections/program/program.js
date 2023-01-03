import style from './progrm.module.css'
import ProgramCard from '../../components/programCard/programCard'
import yogaPic from '../../../src/images/yoga.png'
import muscle from '../../../src/images/muscle.png'
import runingBoy from '../../../src/images/runingBoy.png'



export default function ProgramSec () {

    const dummyLoremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

    const cardData = [
        {
            pic : runingBoy,
            cardHead : 'Cardio and Strength',
            programInfo : dummyLoremText
        },
        {
            pic : muscle,
            cardHead : 'Muscle Building',
            programInfo : dummyLoremText
        },
        {
            pic : yogaPic,
            cardHead : 'Stretch and Yoga',
            programInfo : dummyLoremText
        },
    ]
    return(
        <section className={style.sectionWrapper}>
            <h2 className={style.primaryHeading}>Program we runs</h2>
            <h6 className={style.secondaryHeading}>Build your body best</h6>
            <div className={style.wrapper}>

                {
                    cardData.map((cardData , index) => (
                        <ProgramCard 
                            key = {index}
                            cardData = {cardData}
                        />
                    ))
                }
        
            </div>

        </section>
     
    )
}