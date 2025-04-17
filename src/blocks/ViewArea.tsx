import { ReportTitle } from '@/components/Title/ReportTitle';
import { ReportAtom } from '@/state/ReportData';
import { useAtomValue } from 'jotai';
import style from './ViewArea.module.scss';

export const ViewArea = () => {
  const todays_todo = useAtomValue(ReportAtom).todays_todo;
  const tomorrow_todo = useAtomValue(ReportAtom).tomorrow_todo;
  const time = useAtomValue(ReportAtom).time;
  const time_remote = useAtomValue(ReportAtom).time_remote;
  const other = useAtomValue(ReportAtom).other;
  const today = new Date().toLocaleDateString('ja-JP', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
  const handleCopy = () => {
    const reportContent = `■ ${today}
\n■ 今日行ったこと
${todays_todo
  .map((todo) => (todo.title ? `・${todo.title}${todo.content !== '' ? `｜${todo.content}` : ''}` : ''))
  .join('\n')}
\n■ 明日やること
${tomorrow_todo
  .map((todo) => (todo.title ? `・${todo.title}${todo.content !== '' ? `｜${todo.content}` : ''}` : ''))
  .join('\n')}
\n■ 出退勤時間
${time}
\n■ 自宅作業（作業した場合のみ）
${time_remote}
\n■ その他
${other}`;
    navigator.clipboard.writeText(reportContent).then(() => {
      alert('コピーしました');
    });
  };

  return (
    <>
      <ReportTitle title="今日行ったこと" />
      <div>
        {todays_todo.map((todo, index) => (
          <div key={index}>
            {todo.title && `・${todo.title}`}
            {todo.content !== '' && `｜${todo.content}`}
          </div>
        ))}
      </div>
      <ReportTitle title="明日やること" />
      <div>
        {tomorrow_todo.map((todo, index) => (
          <div key={index}>
            {todo.title && `・${todo.title}`}
            {todo.content !== '' && `｜${todo.content}`}
          </div>
        ))}
      </div>
      <ReportTitle title="出退勤時間" />
      <div>{time}</div>
      <ReportTitle title="自宅作業（作業した場合のみ）" />
      <div>{time_remote}</div>
      <ReportTitle title="その他" />
      <div>{other}</div>
      <button type="button" className={style.copy} onClick={handleCopy}>
        コピー
      </button>
    </>
  );
};
