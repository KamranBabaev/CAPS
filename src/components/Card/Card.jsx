import styles from './Card.module.scss'
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";
import plus from '../../assets/plus.svg'
import add from '../../assets/add.png'
import liked from '../../assets/liked.svg'
import unliked from '../../assets/unliked.svg'

export const Card = ({
                         id,
                         name,
                         imgUrl,
                         price,
                         onAddToFavorite,
                         onPlus,
                         favorited = false,
                         loading = false,
                     }) => {

    const {isItemAdded} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const itemObj = {id, parentID: id, name, price, imgUrl}

    const onClickFavorite = () => {
        onAddToFavorite(itemObj)
        setIsFavorite(!isFavorite)
    }

    const onClickPlus = () => {
        onPlus(itemObj)
    }

    return (
        <div className={styles.card}>
            {
                loading
                    ? <ContentLoader
                        speed={2}
                        width={170}
                        height={280}
                        viewBox="0 0 155 280"
                        backgroundColor="#848383"
                        foregroundColor="#c4c4c4">
                        <rect x="2" y="199" rx="10" ry="10" width="109" height="20"/>
                        <rect x="2" y="168" rx="10" ry="10" width="149" height="20"/>
                        <rect x="2" y="3" rx="10" ry="10" width="150" height="148"/>
                        <rect x="4" y="244" rx="10" ry="10" width="83" height="20"/>
                        <rect x="121" y="233" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>

                    : <>
                        {onAddToFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                            <img src={isFavorite ? liked : unliked}
                                 width={18}
                                 height={18} alt=''/>
                        </div>}
                        <div className={styles.imgItem}>
                            <img src={imgUrl} width={140} alt=""/>
                        </div>
                        <h5>{name}</h5>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardPrice}>
                                <span>Цена:  </span>
                                <b>{price} руб.</b>
                            </div>
                            {onPlus && <button className={styles.button} onClick={onClickPlus}>
                                <img src={isItemAdded(id) ? plus : add} width={20} height={20}
                                     alt=""/>
                            </button>}
                        </div>
                    </>
            }
        </div>
    )
}