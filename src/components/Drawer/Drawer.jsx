import styles from './Drawer.module.scss'
import {InfoInDrawer} from "../InfoInDrawer/InfoInDrawer";
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";


export const Drawer = ({onClose, items = [], onRemoveItemToCart}) => {

    const {cartItems, setCartItems} = useContext(AppContext)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderID, setOrderID] = useState(null)

    const onClickOrder = async () => {
        try {
            const {data} = await axios.post('https://60d6dc54307c300017a5f532.mockapi.io/orders', {items: cartItems})
            axios.put('https://60d6dc54307c300017a5f532.mockapi.io/orders', [])
            setOrderID(data.id)
            setIsOrderComplete(true)
            setCartItems([])
        } catch (error) {
            alert('Не удалось создать заказ! :(')
        }
    }

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

                {
                    items.length > 0
                        ? <>
                            <div className={styles.items}>
                                {
                                    items.map((obj) => (
                                        <div key={obj.id} className={styles.cartItems}>
                                            <img className={styles.productInCart}
                                                 src={obj.imgUrl}
                                                 width={70} alt=""/>
                                            <div className={styles.item}>
                                                <p>{obj.name}</p>
                                                <b>{obj.price} руб</b>
                                            </div>
                                            <img onClick={() => onRemoveItemToCart(obj.id)}
                                                 className={styles.removeBTN}
                                                 src={'icons/cancel.png'}
                                                 width={15} height={15} alt=''/>
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
                                <button onClick={onClickOrder}
                                        className={styles.greenBTN}>оформить заказ
                                    <img src={'icons/right-arrow.png'} width={28} alt=''/>
                                </button>
                            </div>
                        </>


                        : <InfoInDrawer title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                                        image={isOrderComplete ? 'icons/orderDone.png' : 'icons/emptyCart.svg'}
                                        description={isOrderComplete
                                            ? `Номер вашего заказа #${orderID}, в ближайшее время он будет передан в курьерскую службу!`
                                            : 'Добавьте один и более товаров для оформления заказа'}
                        />
                }

            </div>
        </div>
    )
}