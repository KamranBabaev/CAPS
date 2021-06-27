import React from "react";
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


    React.useEffect(() => {
        fetch('https://60d6dc54307c300017a5f532.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            })
    }, [])

    const addAddtoCart = (id) => {
        setCartItems(prev => [...prev, id])
    }

    const onChangeSearchInput = (event) => {
        let text = event.currentTarget.value
        setSearchValue(text)
    }

    return (

        <div className="wrapper">

            {
                cartOpened
                    ? <Drawer items={cartItems}
                              onClose={() => setCartOpened(false)}/>
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
                                />)
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
