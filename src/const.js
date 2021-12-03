import logoImage from './assets/img/logo.svg'

export const Logo = {
  src: logoImage,
  alt: 'Логотип Escape Room',
  width: 134,
  height: 50,
};

export const QuestImage = {
  width: 344,
  height: 232,
};

export const APIRoute = {
  Quest: '/quests',
  Orders: '/orders',
};

export const ReducerName = {
  Quests: 'quests',
};

export const FetchState = {
  Idle: 'idle',
  Pending: 'pending',
};
