import Table from "./components/Table";
import { useState, useEffect } from 'react';

function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=${apiKey}`;

  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {

    try {

      const data = await fetch(url);
      const response = await data.json();
      setCoins(response);
      console.log(response);
    } catch (err) {
      console.error('Error' + err);
    }
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <Table coins={coins}/>
    </>
  )
}

export default App
