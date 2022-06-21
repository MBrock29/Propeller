import s from "./Loading.module.scss";

export const Loading: React.FC = () => {
  return (
    <div className={s.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
