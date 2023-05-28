import { Voting } from './voting.model';

export const votingMock: Voting[] = [
  {
    id: 1,
    question: 'Как часто в месяц вы готовы заниматься?',
    options: [
      {
        id: 1,
        title: 'Один раз',
      },
      {
        id: 2,
        title: 'Десять раз',
      },
      {
        id: 3,
        title: 'Тридцать раз',
      },
    ],
  },
  {
    id: 2,
    question: 'Вы любите физические активности?',
    options: [
      {
        id: 1,
        title: 'Не люблю',
      },
      {
        id: 2,
        title: 'Могу иногда',
      },
      {
        id: 3,
        title: 'Не могу жить без спорта',
      },
    ],
  },
  {
    id: 3,
    question: 'Любите ли вы художественную литературу?',
    options: [
      {
        id: 1,
        title: 'Скорее нет',
      },
      {
        id: 2,
        title: 'Нейтрально',
      },
      {
        id: 3,
        title: 'Скорее да',
      },
    ],
  }
]
