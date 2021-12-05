import Iconlogo from './assets/img/logo.svg'
import IconAllQuests from 'assets/img/icon-all-quests.svg';
import IconAdventures from 'assets/img/icon-adventures.svg';
import IconHorrors from 'assets/img/icon-horrors.svg';
import IconMystic from 'assets/img/icon-mystic.svg';
import IconDetective from 'assets/img/icon-detective.svg';
import IconScifi from 'assets/img/icon-scifi.svg';

export const Logo = {
  src: Iconlogo,
  alt: 'Логотип Escape Room',
  width: 134,
  height: 50,
};

export const QuestImage = {
  width: 344,
  height: 232,
};

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

export const AppRoute = {
  Root: '/',
  Quest: '/detailed-quest/:id',
  Contacts: '/contacts',
  NotFound: '/not-found',
};

export const ReducerName = {
  Quests: 'quests',
};

export const FetchState = {
  Idle: 'idle',
  Pending: 'pending',
};

export const questLevels = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'простой',
};

export const QuestTab = {
  All: {
    icon: IconAllQuests,
    title: 'Все квесты',
    type: 'all'
  },
  Adventures: {
    icon: IconAdventures,
    title: 'Приключения',
    type: 'adventures'
  },
  Horror: {
    icon: IconHorrors,
    title: 'Ужасы',
    type: 'horror'
  },
  Mystic: {
    icon: IconMystic,
    title: 'Мистика',
    type: 'mystic'
  },
  Detective: {
    icon: IconDetective,
    title: 'Детектив',
    type: 'detective'
  },
  SciFi: {
    icon: IconScifi,
    title: 'Sci-fi',
    type: 'sci-fi',
  },
};
