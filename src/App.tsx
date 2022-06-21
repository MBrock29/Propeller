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
}

function App() {
  const [data, setData] = useState<CoinProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => toast("Oops, there was en error fetching the data!"));
  }, []);

  loading && <Loading />;

  return (
    <div className={s.App}>
      <div className={s.header}>
        <Header />
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
          <div>
            <Card
              name={coin.name}
              symbol={coin.symbol}
              rank={coin.rank}
              marketCapUsd={coin.marketCapUsd}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
