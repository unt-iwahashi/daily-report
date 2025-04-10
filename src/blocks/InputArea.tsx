import style from './InputArea.module.scss';
import { ReportTitle } from '@/components/Title/ReportTitle';
import { ReportAtom } from '@/state/ReportData';
import { useSetAtom, useAtomValue } from 'jotai';

export const InputArea = () => {
  const setReport = useSetAtom(ReportAtom);
  const todays_todo = useAtomValue(ReportAtom).todays_todo;
  const tomorrow_todo = useAtomValue(ReportAtom).tomorrow_todo;

  const handleTodoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: 'title' | 'content',
    list: 'todays_todo' | 'tomorrow_todo'
  ) => {
    const { value } = e.target;
    setReport((prev) => ({
      ...prev,
      [list]: prev[list].map((todo, i) => (i === index ? { ...todo, [field]: value } : todo)),
    }));
  };

  const addTodoInput = (field: 'todays_todo' | 'tomorrow_todo') => {
    setReport((prev) => ({
      ...prev,
      [field]: [
        ...prev[field],
        {
          title: '',
          content: '',
        },
      ],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReport((prev) => ({
      ...prev,
      [name]: value.length !== 0 ? value : getDefaultValue(name),
    }));
  };

  const getDefaultValue = (name: string) => {
    switch (name) {
      case 'time':
        return '9:30-18:30';
      case 'time_remote':
        return 'なし';
      case 'other':
        return 'お疲れ様でしたー';
      default:
        return '';
    }
  };

  return (
    <>
      <ReportTitle title="今日行ったこと" />

      {todays_todo.map((todo, index) => (
        <div key={index} className={style.todoInput}>
          <div className={style.todoInput_item}>
            案件名
            <input
              type="text"
              placeholder="案件名"
              value={todo.title}
              onChange={(e) => handleTodoChange(e, index, 'title', 'todays_todo')}
            />
          </div>
          <div className={style.todoInput_item}>
            作業内容
            <input
              type="text"
              placeholder="作業内容"
              value={todo.content}
              onChange={(e) => handleTodoChange(e, index, 'content', 'todays_todo')}
            />
          </div>
        </div>
      ))}

      <button onClick={() => addTodoInput('todays_todo')}>+</button>
      <ReportTitle title="明日やること" />

      {tomorrow_todo.map((todo, index) => (
        <div key={index} className={style.todoInput}>
          <div className={style.todoInput_item}>
            案件名
            <input
              type="text"
              placeholder="案件名"
              value={todo.title}
              onChange={(e) => handleTodoChange(e, index, 'title', 'tomorrow_todo')}
            />
          </div>
          <div className={style.todoInput_item}>
            作業内容
            <input
              type="text"
              placeholder="作業内容"
              value={todo.content}
              onChange={(e) => handleTodoChange(e, index, 'content', 'tomorrow_todo')}
            />
          </div>
        </div>
      ))}

      <button onClick={() => addTodoInput('tomorrow_todo')}>+</button>
      <ReportTitle title="出退勤時間" />
      <input type="text" name="time" onChange={handleChange} />
      <ReportTitle title="自宅作業（作業した場合のみ）" />
      <input type="text" name="time_remote" onChange={handleChange} />
      <ReportTitle title="その他" />
      <textarea name="other" cols={60} rows={5} onChange={handleChange}></textarea>
    </>
  );
};
