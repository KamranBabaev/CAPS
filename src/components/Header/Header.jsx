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
                    <img src={'img/logo.png'} width={40} height={40} alt=''/>
                    <div className={styles.headerInfo}>
                        <h3>CAPSULA</h3>
                        <p>магазин лучших гаджетов</p>
                    </div>
                </div>
            </Link>


            <ul className={styles.headerRight}>
                <li>
                    <Link to='/favorites'>
                        <img src={'img/favorite.svg'} width={22} height={22} style={{opacity: '80%'}}/>
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <img src={'img/userAcc.svg'} width={22} height={22} style={{opacity: '80%'}}/>
                    </Link>
                </li>
                <li onClick={props.onClickCart}>
                    <img src={'img/cart.svg'} width={22} height={22} style={{opacity: '80%'}}/>
                    <span style={{marginRight: '35px', fontWeight: '600', fontSize: '20px'}}>{totalPrice} руб.</span>
                </li>
            </ul>
        </header>
    )
}