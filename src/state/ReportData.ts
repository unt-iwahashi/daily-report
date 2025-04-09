import { atom } from 'jotai';

export const ReportAtom = atom({
  todays_todo: [
    {
      title: '',
      content: '',
    },
  ],
  tomorrow_todo: [
    {
      title: '',
      content: '',
    },
  ],
  time: '9:30-18:30',
  time_remote: 'なし',
  other: 'お疲れ様でしたー',
});
