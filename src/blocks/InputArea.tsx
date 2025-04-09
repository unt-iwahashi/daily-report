import { ReportTitle } from '@/components/Title/ReportTitle';

export const InputArea = () => {
  return (
    <>
      <ReportTitle title="今日行ったこと" />
      <ReportTitle title="明日やること" />
      <ReportTitle title="出退勤時間" />
      <ReportTitle title="自宅作業（作業した場合のみ）" />
      <ReportTitle title="その他" />
    </>
  );
};
