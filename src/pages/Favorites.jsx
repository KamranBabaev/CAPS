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
                                  id={obj.id}
                                  name={obj.name}
                                  price={obj.price}
                                  imgUrl={obj.imgUrl}
                                  favorited={true}
                                  onAddToFavorite={onAddToFavorite}
                            />)
                }
            </div>
        </div>
    )
}