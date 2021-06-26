import styles from './Header.module.scss'

export const Header = (props) => {

    return (
        <header>
            <div className={styles.headerLeft}>
                <img src={'icons/adelie-1.svg'} width={40} height={40} alt=''/>
                <div className={styles.headerInfo}>
                    <h3>CAPS - стиль</h3>
                    <p>магазин лучших бейсболок</p>
                </div>
            </div>

            <ul className={styles.headerRight}>
                <li onClick={props.onClickCart}>
                    <img src={'icons/shopCart.png'} width={22} height={22}/>
                    <span>1 999 руб.</span>
                </li>
                <li>
                    <img src={'icons/user.png'} width={22} height={22}/>
                </li>
            </ul>
        </header>
    )
}