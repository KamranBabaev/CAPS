import styles from './Header.module.scss'

export const Header = () => {

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
                <li>
                    <img src={'icons/shopCart.png'} width={18} height={18}/>
                    <span>1 999 руб.</span>
                </li>
                <li>
                    <img src={'icons/user.png'} width={18} height={18}/>
                </li>
            </ul>
        </header>
    )
}