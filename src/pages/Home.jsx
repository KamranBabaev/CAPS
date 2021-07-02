import styles from "../components/Drawer/Drawer.module.scss";
import {Card} from "../components/Card/Card";

export function Home({
                         items,
                         onAddtoCart,
                         onAddToFavorite,
                         onChangeSearchInput,
                         setSearchValue,
                         searchValue,
                         isLoading
                     }) {


    const renderItems = () => {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? [...Array(10)] : filteredItems)
            .map((item, index) =>
                <Card key={index}
                      onAddToFavorite={(obj) => onAddToFavorite(obj)}
                      onPlus={(item) => onAddtoCart(item)}
                      loading={isLoading}
                      {...item}
                />)
    }

    return (
        <div className='content'>
            <div className='contentHeader'>
                <div>
                    <h1>
                        {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все бейсболки: '}
                    </h1>
                </div>
                <div className='searchBlock'>
                    <img src={'icons/searchICON.png'} width={15} height={15} alt=''/>
                    {
                        searchValue ?
                            <img onClick={() => setSearchValue('')}
                                 className={styles.removeBTN}
                                 style={{boxSizing: 'border-box', outline: 'none', position: 'absolute', right: '20px'}}
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
                {renderItems()}
            </div>
        </div>
    )
}