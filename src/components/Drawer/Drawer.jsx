import styles from './Drawer.module.scss'

export const Drawer = () => {

    return (
        <div style={{display: ""}} className='overlay'>
            <div className='drawer'>
                <h2>Корзина:
                    <img className='removeBTN' src={'icons/cancel.png'} width={18} height={18} alt=''/>
                </h2>
                <div className='items'>
                    <div className="cartItems">
                        <img className='productInCart' src={'caps/caps1.jpg'} width={70} alt=""/>
                        <div className='item'>
                            <p>КЕПКА<br/>TRAILHEAD UX-1</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className='removeBTN' src={'icons/cancel.png'} width={15} height={15} alt=''/>
                    </div>
                    <div className="cartItems">
                        <img className='productInCart' src={'caps/caps2.jpg'} width={70} alt=""/>
                        <div className='item'>
                            <p>КЕПКА<br/>TRAILHEAD UX-1</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className='removeBTN' src={'icons/cancel.png'} width={15} height={15} alt=''/>
                    </div>
                    <div className="cartItems">
                        <img className='productInCart' src={'caps/caps3.jpg'} width={70} alt=""/>
                        <div className='item'>
                            <p>КЕПКА<br/>TRAILHEAD UX-1</p>
                            <b>1 999 руб.</b>
                        </div>
                        <img className='removeBTN' src={'icons/cancel.png'} width={15} height={15} alt=''/>
                    </div>
                </div>
                <div className='resultCartBlock'>
                    <ul>
                        <li className='total'>
                            <span>Итого:</span>
                            <div></div>
                            <b>5 997 руб.</b>
                        </li>
                        <li className='tax'>
                            <span>Налог 13%:</span>
                            <div></div>
                            <b>760 руб.</b>
                        </li>
                    </ul>
                    <button className='greenBTN'>оформить заказ
                        <img src={'icons/right-arrow.png'} width={28} alt=''/>
                    </button>
                </div>
            </div>
        </div>
    )
}