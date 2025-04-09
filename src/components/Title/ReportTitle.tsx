import style from './ReportTitle.module.scss';

type Props = {
  title: string;
};

export const ReportTitle = ({ title }: Props) => {
  return (
    <>
      <h2 className={style.reportTitle}>■ {title}</h2>
    </>
  );
};
