import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";

export const Header = (props) => {

    const {cartItems} = useContext(AppContext)

    const totalPrice = cartItems.reduce((sum, elem) => elem.price + sum, 0)

    return (
        <header>
            <Link to='/'>
                <div className={styles.headerLeft}>
                    <img src={'icons/adelie-1.svg'} width={40} height={40} alt=''/>
                    <div className={styles.headerInfo}>
                        <h3>CAPS</h3>
                        <p>магазин лучших бейсболок</p>
                    </div>
                </div>
            </Link>


            <ul className={styles.headerRight}>
                <li>
                    <Link to='/favorites'>
                        <img src={'icons/favorite.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <img src={'icons/userAcc.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                    </Link>
                </li>
                <li onClick={props.onClickCart}>
                    <img src={'icons/cart.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                    <span style={{marginRight: '35px', fontWeight: '600'}}>{totalPrice} руб.</span>
                </li>
            </ul>
        </header>
    )
}