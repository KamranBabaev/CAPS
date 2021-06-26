import styles from './Card.module.scss'

export const Card = (props) => {

    const onClickButton = () => {
        alert(props.id)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={'icons/unliked.svg'} width={15} height={15} alt=''/>
            </div>

            <img src={props.imgUrl} width={133} alt=""/>
            <h5>{props.name}</h5>

            <div className={styles.cardBottom}>

                <div className={styles.cardPrice}>
                    <span>Цена:  </span>
                    <b>{props.price} руб.</b>
                </div>

                <button className={styles.button} onClick={onClickButton}>
                    <img src={'icons/add.png'} width={15} height={15} alt=""/>
                </button>

            </div>
        </div>
    )
}