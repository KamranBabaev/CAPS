import styles from './Card.module.scss'
import {useState} from "react";

export const Card = ({id, name, price, imgUrl, onAddToFavorite, onPlus, favorited = false}) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(favorited)


    const onClickFavorite = () => {
        onAddToFavorite({id, name, price, imgUrl})
        setIsFavorite(!isFavorite)
    }

    const onClickPlus = () => {
        onPlus({name, price, imgUrl})
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

            <img src={imgUrl} width={133} alt=""/>
            <h5>{name}</h5>

            <div className={styles.cardBottom}>

                <div className={styles.cardPrice}>
                    <span>Цена:  </span>
                    <b>{price} руб.</b>
                </div>

                <button className={styles.button} onClick={onClickPlus}>
                    <img src={isAdded ? 'icons/plus.svg' : 'icons/add.png'} width={20} height={20} alt=""/>
                </button>

            </div>
        </div>
    )
}