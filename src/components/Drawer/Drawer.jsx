import styles from './Drawer.module.scss'


export const Drawer = ( {onClose, items = []}) => {

    return (
        <div style={{display: ""}} className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>Корзина:
                    <img className={styles.removeBTN}
                         src={'icons/cancel.png'}
                         width={18}
                         height={18}
                         alt=''
                         onClick={onClose}
                    />
                </h2>
                <div className={styles.items}>

                    {
                        items.map( (obj) => (
                            <div className={styles.cartItems}>
                                <img className={styles.productInCart}
                                     src={obj.imgUrl}
                                     width={70} alt=""/>
                                <div className={styles.item}>
                                    <p>{obj.name}</p>
                                    <b>{obj.price} руб</b>
                                </div>
                                <img className={styles.removeBTN} src={'icons/cancel.png'} width={15} height={15} alt=''/>
                            </div>
                        ))
                    }



                </div>
                <div className={styles.resultCartBlock}>
                    <ul>
                        <li className={styles.total}>
                            <span>Итого:</span>
                            <div></div>
                            <b>5 997 руб.</b>
                        </li>
                        <li className={styles.tax}>
                            <span>Налог 13%:</span>
                            <div></div>
                            <b>760 руб.</b>
                        </li>
                    </ul>
                    <button className={styles.greenBTN}>оформить заказ
                        <img src={'icons/right-arrow.png'} width={28} alt=''/>
                    </button>
                </div>
            </div>
        </div>
    )
}