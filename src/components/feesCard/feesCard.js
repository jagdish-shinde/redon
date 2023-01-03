import style from './feesCard.module.css'
import { CiDumbbell } from "react-icons/ci";
import { TiTick ,TiTickOutline } from "react-icons/ti";
import Button from '../button/button';


// CiDumbbell   TiTick


export default function FeesCard ({planData}) {

    const {
        pricing = '',
        plan = '',
        benifits = []
    } = planData 

    return(
        <div className={style.feesCard}>
            <div className={style.dumbleWrapper}>
                <CiDumbbell/>
            </div>
            <p>{pricing}</p>
            <p>{plan}</p>
            <div className={style.PlanBenifit}>
                {
                    benifits.map(planBenifit => (
                        <div className={style.benifit}>
                            <TiTickOutline 
                               className={style.tick}
                            />
                            <p >{planBenifit}</p>
                        </div>
                    ))
                }

            </div>
            
            <Button 
                buttonText = 'Start Free Trial'
                buttonStyle = {style.buttonStyle}
            />



        </div>
    )
}