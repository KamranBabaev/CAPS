import React, {useState} from "react";
import axios from 'axios'
import './App.css';
import {Drawer} from "./components/Drawer/Drawer";
import {Header} from "./components/Header/Header";
import {Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";

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

    const onAddtoCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentID) === Number(obj.id))
            if (findItem) {
                setCartItems(prev => prev.filter((item) => Number(item.parentID) !== Number(obj.id)))
                await axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartItems((prev) => [...prev, obj])
                const {data} = await axios.post('https://60d6dc54307c300017a5f532.mockapi.io/cart/', obj)
                setCartItems(prev => prev.map((item) => {
                    if (item.parentID === data.parentID) {
                        return {
                            ...item, id: data.id
                        }
                    }
                    return item
                }))
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину :(')
        }
    }

    const onRemoveItemToCart = (id) => {
        try {
            axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/cart/${id}`)
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
        } catch (error) {
            alert('Ошибка при удалении товаров из корзины :(')
        }
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://60d6dc54307c300017a5f532.mockapi.io/favorites/${obj.id}`)
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://60d6dc54307c300017a5f532.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в избранное..')
        }
    }

    const onChangeSearchInput = (event) => {
        let text = event.currentTarget.value
        setSearchValue(text)
    }

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentID) === Number(id))
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
                isItemAdded,
            }}>
            <div className="wrapper">

                <Drawer items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onRemoveItemToCart={onRemoveItemToCart}
                        opened={cartOpened}/>

                <Header onClickCart={() => setCartOpened(true)}/>

                    <Route exact path='/'>
                        <Home items={items}
                              cartItems={cartItems}
                              searchValue={searchValue}
                              setSearchValue={setSearchValue}
                              onChangeSearchInput={onChangeSearchInput}
                              onAddToFavorite={onAddToFavorite}
                              onAddtoCart={onAddtoCart}
                              isLoading={isLoading}
                        />
                    </Route>

                    {/*<Route path='favorites' component={Favorites}/>*/}

                    <Route exact path='/favorites'>
                        <Favorites/>
                    </Route>

                    <Route exact path='/orders'>
                        <Orders/>
                    </Route>

            </div>
        </AppContext.Provider>
    )
}

export default App;
