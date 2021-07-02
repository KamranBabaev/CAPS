import {Card} from "../components/Card/Card";
import {useContext} from "react";
import {AppContext} from "../App";

export function Favorites() {

    const {favorites, onAddToFavorite, onAddtoCart} = useContext(AppContext)

    return (
        <div className='content'>
            <div className='contentHeader'>
                <h2>Избранное:</h2>
            </div>

            <div className='allCaps'>
                {
                    favorites
                        .map(obj =>
                            <Card key={obj.id}
                                  favorited={true}
                                  onAddToFavorite={onAddToFavorite}
                                  id={obj.id}
                                  name={obj.name}
                                  price={obj.price}
                                  imgUrl={obj.imgUrl}
                                  onPlus={(obj) => onAddtoCart(obj)}
                            />
                        )
                }
            </div>
        </div>
    )
}