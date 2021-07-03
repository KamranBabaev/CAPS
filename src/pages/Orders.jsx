import {Card} from "../components/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

export function Orders() {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://60d6dc54307c300017a5f532.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при запросе данных...')
            }
        })()
    }, [])

    return (
        <div className='content'>
            <div className='contentHeader'>
                <h2>Мои заказы:</h2>
            </div>

            <div className='allCaps'>
                {
                    (isLoading ? [...Array(8)] : orders)
                        .map((obj, index) =>
                            <Card key={index}
                                  loading={isLoading}
                                  {...obj}
                            />
                        )
                }
            </div>
        </div>
    )
}