import styles from './InfoInDrawer.module.scss';
import {useContext} from "react";
import {AppContext} from "../../App";


export const InfoInDrawer = ({title, img, description}) => {

    const {setCartOpened} = useContext(AppContext)

    return (
        <div className={styles.emptyCart}>
            <img className={styles.iconCart}
                 src={img}
                 width={140} height={140} alt=''
            />
            <h2 style={{marginBottom: '0px', opacity: '70%'}}>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className={styles.greenBTN}>
                вернуться назад
            </button>
        </div>
    )
}