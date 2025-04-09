import { ReportTitle } from '@/components/Title/ReportTitle';
import { ReportAtom } from '@/state/ReportData';
import { useAtomValue } from 'jotai';

export const ViewArea = () => {
  const todays_todo = useAtomValue(ReportAtom).todays_todo;
  const tomorrow_todo = useAtomValue(ReportAtom).tomorrow_todo;
  const time = useAtomValue(ReportAtom).time;
  const time_remote = useAtomValue(ReportAtom).time_remote;
  const other = useAtomValue(ReportAtom).other;
  return (
    <>
      <ReportTitle title="今日行ったこと" />
      <ul>
        {todays_todo.map((todo, index) => (
          <li key={index}>
            ・{todo.title} {todo.content !== '' && `｜${todo.content}`}
          </li>
        ))}
      </ul>
      <ReportTitle title="明日やること" />
      <ul>
        {tomorrow_todo.map((todo, index) => (
          <li key={index}>
            ・{todo.title} {todo.content !== '' && `｜${todo.content}`}
          </li>
        ))}
      </ul>
      <ReportTitle title="出退勤時間" />
      <div>{time}</div>
      <ReportTitle title="自宅作業（作業した場合のみ）" />
      <div>{time_remote}</div>
      <ReportTitle title="その他" />
      <div>{other}</div>
    </>
  );
};
