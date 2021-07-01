import {Card} from "../components/Card/Card";

export function Favorites({items, onAddToFavorite}) {
    return (
        <div className='content'>
            <div className='contentHeader'>
                <h2>Избранное</h2>
            </div>

            <div className='allCaps'>
                {
                    items
                        .map(obj =>
                            <Card key={obj.id}
                                  favorited={true}
                                  onAddToFavorite={onAddToFavorite}
                                  id={obj.id}
                                  name={obj.name}
                                  price={obj.price}
                                  imgUrl={obj}
                            />)
                }
            </div>
        </div>
    )
}