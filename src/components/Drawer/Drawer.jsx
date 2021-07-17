import styles from './Drawer.module.scss'
import {InfoInDrawer} from "../InfoInDrawer/InfoInDrawer";
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";
import cancel from '../../assets/cancel.png'
import rightarrow from '../../assets/rightarrow.png'
import orderdone from '../../assets/orderdone.png'
import emptycart from '../../assets/emptycart.svg'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = ({onClose, items = [], onRemoveItemToCart, opened}) => {

    const {cartItems, setCartItems} = useContext(AppContext)
    const [orderID, setOrderID] = useState(null)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


    const totalPrice = cartItems.reduce((sum, elem) => elem.price + sum, 0)


    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://60d6dc54307c300017a5f532.mockapi.io/orders', {items: cartItems})
            setOrderID(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete('https://60d6dc54307c300017a5f532.mockapi.io/cart/' + item.id)
                await delay(1000);
            }
        } catch (error) {
            alert('Не удалось создать заказ! :(')
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2>Корзина:
                    <img className={styles.removeBTN}
                         src={cancel}
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
                                                 src={cancel}
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
                                        <b>{totalPrice} руб.</b>
                                    </li>
                                    <li className={styles.tax}>
                                        <span>Включая НДС:</span>
                                        <div></div>
                                        <b>{(Number(totalPrice / 100 * 5).toFixed(2))} руб.</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading}
                                        onClick={onClickOrder}
                                        className={styles.greenBTN}>оформить заказ
                                    <img src={rightarrow} width={28} alt=''/>
                                </button>
                            </div>
                        </>


                        : <InfoInDrawer title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                                        image={isOrderComplete ? <img src={orderdone} alt=''/> : <img src={emptycart} alt=''/>}
                                        description={
                                            isOrderComplete
                                                ? `Номер вашего заказа #${orderID}, в ближайшее время он будет передан в курьерскую службу!`
                                                : 'Добавьте один и более товаров для оформления заказа'
                                        }
                        />
                }
            </div>
        </div>
    )
}