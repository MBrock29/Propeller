import { useEffect, useState } from "react";
import s from "./App.module.scss";
import Card from "./Card/Card";
import Header from "./Header/Header";
import { Loading } from "./Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface CoinProps {
  name: string;
  symbol: string;
  rank: number;
  marketCapUsd: number;
  id?: string;
}

function App() {
  const [response, setResponse] = useState<CoinProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoinProps[]>([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.data.slice(0, 100));
        setData(data.data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => toast("Oops, there was en error fetching the data!"));
  }, []);

  const filterData = (searchTerm: string) => {
    const results = response.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(results);
  };

  loading && <Loading />;

  return (
    <div className={s.App}>
      <div className={s.header}>
        <Header />
        <input
          className={s.input}
          type="input"
          placeholder="Search by name"
          onChange={(e) => filterData(e.target.value)}
        ></input>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={s.container}>
        {data.map((coin) => (
          <Card
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            rank={coin.rank}
            marketCapUsd={coin.marketCapUsd}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
