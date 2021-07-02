import React, {useState} from "react";
import axios from 'axios'
import './App.css';
import {Drawer} from "./components/Drawer/Drawer";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";

export const AppContext = React.createContext({})

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        async function fetchData() {

            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://60d6dc54307c300017a5f532.mockapi.io/cart'),
                    axios.get('https://60d6dc54307c300017a5f532.mockapi.io/favorites'),
                    axios.get('https://60d6dc54307c300017a5f532.mockapi.io/items'),
                ])

                setIsLoading(false)
                setCartItems(cartResponse.data)
                setFavorites(favoritesResponse.data)
                setItems(itemsResponse.data)
            } catch (error) {
                alert('Ошибка при запросе данных.')
            }
        }

        fetchData()
    }, [])


    const onAddtoCart = (obj) => {
        if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/cart/${obj.id}`)
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))

        } else {
            axios.post('https://60d6dc54307c300017a5f532.mockapi.io/cart', obj)
            setCartItems(prev => [...prev, obj])
        }
    }

    const onRemoveItemToCart = (id) => {
        axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        let text = event.currentTarget.value
        setSearchValue(text)
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/favorites/${obj.id}`)
            } else {
                const {data} = await axios.post('https://60d6dc54307c300017a5f532.mockapi.io/favorites', obj)
                setFavorites(prev => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в избранное..')
        }
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }


    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                onAddToFavorite,
                onAddtoCart,
                setCartOpened,
                setCartItems,
                isItemAdded
            }}>
            <div className="wrapper">

                {
                    cartOpened
                        ? <Drawer items={cartItems}
                                  onClose={() => setCartOpened(false)}
                                  onRemoveItemToCart={onRemoveItemToCart}/>
                        : null
                }

                <Header onClickCart={() => setCartOpened(true)}/>

                <Route exact path='/'>
                    <Home cartItems={cartItems}
                          searchValue={searchValue}
                          setSearchValue={setSearchValue}
                          onChangeSearchInput={onChangeSearchInput}
                          onAddToFavorite={onAddToFavorite}
                          onAddtoCart={onAddtoCart}
                          isLoading={isLoading}
                          items={items}/>
                </Route>

                <Route exact path='/favorites'>
                    <Favorites/>
                </Route>


            </div>
        </AppContext.Provider>
    )
}

export default App;
