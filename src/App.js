import React from "react";
import './App.css';
import {Drawer} from "./components/Drawer/Drawer";
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
import {useState} from "react";
import {logDOM} from "@testing-library/react";


function App() {


    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)


    React.useEffect(() => {
        fetch('https://60d6dc54307c300017a5f532.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            })
    }, [])


    const addAddtoCart = (obj) => {
        setCartItems(prev => [...prev, obj])
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
                        <h1>Все бейсболки:</h1>
                    </div>
                    <div className='searchBlock'>
                        <img src={'icons/searchICON.png'} width={15} height={15} alt=''/>
                        <input placeholder='поиск...'/>
                    </div>
                </div>

                <div className='allCaps'>
                    {items.map(obj =>
                        <Card key={obj.id}
                              name={obj.name}
                              price={obj.price}
                              imgUrl={obj.imgUrl}
                              onPlus={(obj) => addAddtoCart(obj)}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default App;
