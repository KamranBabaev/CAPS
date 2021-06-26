import styles from './Card.module.scss'
import {useState} from "react";

export const Card = (props) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    const onClickPlus = () => {
        props.onPlus(props)
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite}
                     src={isFavorite ? 'icons/liked.svg' : 'icons/unliked.svg'}
                     width={18}
                     height={18} alt=''/>
            </div>

            <img src={props.imgUrl} width={133} alt=""/>
            <h5>{props.name}</h5>

            <div className={styles.cardBottom}>

                <div className={styles.cardPrice}>
                    <span>Цена:  </span>
                    <b>{props.price} руб.</b>
                </div>

                <button className={styles.button} onClick={onClickPlus}>
                    <img src={isAdded ? 'icons/plus.svg' : 'icons/add.png'} width={20} height={20} alt=""/>
                </button>

            </div>
        </div>
    )
}