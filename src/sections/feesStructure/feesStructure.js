import style from './feesStructure.module.css'
import FeesCard from '../../components/feesCard/feesCard'
import { Fragment } from 'react'

export default function FeesStructure (){

    const plansWeOffer = [
        {
            pricing : '100$',
            plan : 'Silver Plan',
            benifits : [
                'Open Gym',
                'Gymnastic',
                'Swimming' ,
                'kick boxing'
            ]
        },
        {
            pricing : '300$',
            plan : 'Golden Plan',
            benifits : [
                'Open Gym',
                'Gymnastic',
                'Swimming' ,
                'kick boxing'
            ]
        },
        {
            pricing : '500$',
            plan : 'Platinum Plan',
            benifits : [
                'Open Gym',
                'Gymnastic',
                'Swimming' ,
                'kick boxing'
            ]
        },

    ]

    // pricing plan benifits

    return(
        <section className={style.secWrapper} id = 'fees'>
            <h3 className={style.heading}>Choose Your Best plan</h3>
             <div className={style.cardWrapper}>
               {
                plansWeOffer.map(plan => (
                    <FeesCard planData = {plan}/>
                ))
               }
            </div>

        </section>
      
    )
}