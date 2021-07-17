import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";
import favorite from "../../assets/favorite.svg"
import userAcc from "../../assets/userAcc.svg"
import cart from "../../assets/cart.svg"

export const Header = (props) => {

    const {cartItems} = useContext(AppContext)

    const totalPrice = cartItems.reduce((sum, elem) => elem.price + sum, 0)

    return (
        <header>
            <Link to='/'>
                <div className={styles.headerLeft}>
                    <div className={styles.headerInfo}>
                        <h3>CAPSULA</h3>
                        <p>магазин лучших гаджетов</p>
                    </div>
                </div>
            </Link>


            <ul className={styles.headerRight}>
                <li>
                    <Link to='favorites'>
                        <img src={favorite} width={22} height={22} style={{opacity: '80%'}}/>
                    </Link>
                </li>
                <li>
                    <Link to='orders'>
                        <img src={userAcc} width={22} height={22} style={{opacity: '80%'}}/>
                    </Link>
                </li>
                <li onClick={props.onClickCart}>
                    <img src={cart} width={22} height={22} style={{opacity: '80%'}}/>
                    <span style={{marginRight: '35px', fontWeight: '600', fontSize: '20px'}}>{totalPrice} руб.</span>
                </li>
            </ul>
        </header>
    )
}