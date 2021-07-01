import styles from './Card.module.scss'
import {useState} from "react";
import ContentLoader from "react-content-loader"

export const Card = ({
                         id,
                         name,
                         price,
                         imgUrl,
                         onAddToFavorite,
                         onPlus,
                         favorited = false,
                         added = false,
                         loading = false
                     }) => {

    const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorited)


    const onClickFavorite = () => {
        onAddToFavorite({id, name, price, imgUrl})
        setIsFavorite(!isFavorite)
    }

    const onClickPlus = () => {
        onPlus({id, name, price, imgUrl})
        setIsAdded(!isAdded)
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
                        backgroundColor="#e7eeee"
                        foregroundColor="#d0d5d5">
                        <rect x="2" y="199" rx="10" ry="10" width="109" height="20"/>
                        <rect x="2" y="168" rx="10" ry="10" width="149" height="20"/>
                        <rect x="2" y="3" rx="10" ry="10" width="150" height="148"/>
                        <rect x="4" y="244" rx="10" ry="10" width="83" height="20"/>
                        <rect x="121" y="233" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>

                    : <>
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
                    </>
            }

        </div>
    )
}