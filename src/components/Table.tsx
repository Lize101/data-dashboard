import type { Coin } from '../types';

interface TableProps {
    coins: Coin[];
}

const Table = ({ coins }: TableProps) => {

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Current Price</th>
                        <th>High in 24hrs</th>
                        <th>Low in 24hrs</th>
                        <th>Price Change in 24hrs</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin => (
                        <tr key={coin.id}>
                            <td>
                                <img src={coin.image} alt={coin.name}/>
                            </td>
                            <td>
                                {coin.symbol}
                            </td>
                            <td>
                                {coin.name}
                            </td>
                            <td>
                                {coin.current_price}
                            </td>
                            <td>
                                {coin.high_24h}
                            </td>
                            <td>
                                {coin.low_24h}
                            </td>
                            <td style={{color: coin.price_change_24h < 0 ? 'red' : 'green'}}>
                                {coin.price_change_24h}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;