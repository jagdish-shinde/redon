import styles from './header.module.css'
import logo from '../../images/gymLogo.png'
import { GoListUnordered } from "react-icons/go";
import { Fragment, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Header () {
    const [isShowingMenu , setIsShowingMenu] = useState(false)
    const nevbarOptions = [
        { name : 'About' , path : '/aboutPage'},
        { name : 'Home' , path : '/'},
        { name : 'Pricing' , path : ''},
        { name : 'Program' , path : '/programPage'},
    ]

    return(
        <div>
         <header className={styles.headerWrapper}>

            <Link to='/'>
            <picture className={styles.logoWrapper} >
                <img 
                    src = {logo}
                    className = {styles.logo}
                >  
                </img>
            </picture>
            </Link>

            <nav className={styles.navBar}>
                {nevbarOptions.map((option,index) => (
                    <p key={index} className ={styles.navOptions}> 
                    <Link to={option.path} className ={styles.link}>
                        {option.name}
                    </Link>
                    </p>
                ))}
            </nav>

            <GoListUnordered 
                className={styles.menu} 
                onClick ={() => setIsShowingMenu(!isShowingMenu)}
            />
         </header>
            { 
            
            isShowingMenu && <div className={styles.menuOption}>
            <div className={styles.closeBtnWrapper}>
                <AiFillCloseCircle fontSize='25' onClick ={() => setIsShowingMenu(!isShowingMenu)}
                />
            </div>
            <ul className={styles.list}>
                {
                    nevbarOptions.map((option,index) => (
                    <li key={index} className ={styles.listItem}> 
                        <Link to={option.path} className ={styles.link}>
                            {option.name}
                        </Link>
                    </li>
                ))}

            </ul>
            
        </div>
    }
                </div>
    )
}