import { CoinProps } from "../App";
import s from "./Card.module.scss";

const Card: React.FC<CoinProps> = ({ name, symbol, rank, marketCapUsd }) => {
  const marketCap = Number(marketCapUsd).toLocaleString("us", {
    maximumFractionDigits: 0,
  });

  return (
    <div className={s.container}>
      <h3 className={s.rank}>#{rank}</h3>
      <h2 className={s.name}>{name}</h2>
      <h3 className={s.symbol}>{symbol}</h3>
      <h3 className={s.marketCap}>${marketCap}</h3>
    </div>
  );
};

export default Card;
