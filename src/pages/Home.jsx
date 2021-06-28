import styles from "../components/Drawer/Drawer.module.scss";
import {Card} from "../components/Card/Card";

export function Home({items, addAddtoCart, onAddToFavorite, onChangeSearchInput, setSearchValue, searchValue}) {
    return (
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
                                  id={obj.id}
                                  name={obj.name}
                                  price={obj.price}
                                  imgUrl={obj.imgUrl}
                                  onPlus={(obj) => addAddtoCart(obj)}
                                  onAddToFavorite={(obj) => onAddToFavorite(obj)}
                            />)
                }
            </div>
        </div>
    )
}