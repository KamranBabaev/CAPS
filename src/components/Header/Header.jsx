import styles from './Header.module.scss'

export const Header = (props) => {

    return (
        <header>
            <div className={styles.headerLeft}>
                <img src={'icons/adelie-1.svg'} width={40} height={40} alt=''/>
                <div className={styles.headerInfo}>
                    <h3>CAPS</h3>
                    <p>магазин лучших бейсболок</p>
                </div>
            </div>

            <ul className={styles.headerRight}>
                <li>
                    <img src={'icons/favorite.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                </li>
                <li>
                    <img src={'icons/userAcc.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                </li>
                <li onClick={props.onClickCart}>
                    <img src={'icons/cart.svg'} width={22} height={22} style={{opacity: '60%'}}/>
                    <span style={{marginRight: '35px', fontWeight: '600'}}>1 999 руб.</span>
                </li>
            </ul>
        </header>
    )
}