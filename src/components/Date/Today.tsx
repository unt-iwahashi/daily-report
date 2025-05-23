import style from './Today.module.scss';

export const Today = () => {
  const today = new Date().toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <>
      <h2 className={style.today}>■ {today}</h2>
    </>
  );
};
