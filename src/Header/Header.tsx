import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <h1>Top Cryptocurrencies by Market Capitalisation</h1>
    </div>
  );
};

export default Header;
