import React from "react";
import axios from 'axios'
import './App.css';
import {Drawer} from "./components/Drawer/Drawer";
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
import {useState} from "react";
import styles from "./components/Drawer/Drawer.module.scss";


function App() {


    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [isFavorite, setIsFavorite] = useState(false)



    React.useEffect(() => {
        axios.get('https://60d6dc54307c300017a5f532.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://60d6dc54307c300017a5f532.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })
        axios.get('https://60d6dc54307c300017a5f532.mockapi.io/favorites').then(res => {
            setIsFavorite(res.data)
        })

    }, [])

    const addAddtoCart = (obj) => {
        axios.post('https://60d6dc54307c300017a5f532.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
    }

    const onRemoveItemToCart = (id) => {
        axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        let text = event.currentTarget.value
        setSearchValue(text)
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://60d6dc54307c300017a5f532.mockapi.io/favorites', obj)
        setIsFavorite(prev => [...prev, obj])
    }



    return (

        <div className="wrapper">

            {
                cartOpened
                    ? <Drawer items={cartItems}
                              onClose={() => setCartOpened(false)}
                              onRemoveItemToCart={onRemoveItemToCart}/>
                    : null
            }

            <Header onClickCart={() => setCartOpened(true)}/>

            <div className='content'>
                <div className='contentHeader'>
                    <div>
                        <h1>
                            {
                                searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все бейсболки: '
                            }
                        </h1>
                    </div>
                    <div className='searchBlock'>
                        <img src={'icons/searchICON.png'} width={15} height={15} alt=''/>
                        {
                            searchValue ?
                                <img onClick={() => setSearchValue('')}
                                     className={styles.removeBTN}
                                     style={{
                                         boxSizing: 'border-box',
                                         outline: 'none',
                                         position: 'absolute',
                                         right: '20px'
                                     }}
                                     src={'icons/cancel.png'}
                                     width={12}
                                     height={12}
                                     alt=''/>
                                : null
                        }
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder='поиск...'/>
                    </div>
                </div>

                <div className='allCaps'>
                    {
                        items
                            .filter(item => item.name.toLowerCase().includes(searchValue))
                            .map(obj =>
                                <Card key={obj.id}
                                      name={obj.name}
                                      price={obj.price}
                                      imgUrl={obj.imgUrl}
                                      onPlus={(obj) => addAddtoCart(obj)}
                                      onAddToFavorite={(obj) => onAddToFavorite(obj)}
                                />)
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
