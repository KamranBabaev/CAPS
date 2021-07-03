import {Card} from "../components/Card/Card";
import {useContext} from "react";
import {AppContext} from "../App";

export function Favorites() {

    const {favorites, onAddToFavorite} = useContext(AppContext)

    return (
        <div className='content'>
            <div className='contentHeader'>
                <h2>Избранное:</h2>
            </div>

            <div className='allCaps'>
                {
                    favorites
                        .map((obj, index) =>
                            <Card key={index}
                                  favorited={true}
                                  onFavorite={onAddToFavorite}
                                  {...obj}
                            />
                        )
                }
            </div>
        </div>
    )
}