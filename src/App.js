import './App.css';
import {Drawer} from "./components/Drawer/Drawer";
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";


const caps = [
    {id: 1, name: 'кепка TRAILHEAD UX-1', price: 1999, imgUrl: 'caps/caps1.jpg'},
    {id: 2, name: 'кепка TRAILHEAD XYX-2', price: 1650, imgUrl: 'caps/caps2.jpg'},
    {id: 3, name: 'кепка TRAILHEAD JK-3', price: 2100, imgUrl: 'caps/caps3.jpg'},
    {id: 4, name: 'кепка TRAILHEAD POY-4', price: 2349, imgUrl: 'caps/caps4.jpg'},
]

function App() {
    return (
        <div className="wrapper">

            <Drawer/>
            <Header/>

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
                    {caps.map(obj =>
                        <Card
                            key={obj.id}
                            id={obj.id}
                            name={obj.name}
                            price={obj.price}
                            imgUrl={obj.imgUrl}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default App;
