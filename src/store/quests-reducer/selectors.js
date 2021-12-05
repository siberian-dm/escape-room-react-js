import { QuestTab, ReducerName } from 'const';
import { createSelector } from 'reselect';

export const getQuestCards = (state) => state[ReducerName.Quests].questCards;

export const getActiveFilter = (state) => state[ReducerName.Quests].activeFilter;

export const getIsQuestloaded = (state) => state[ReducerName.Quests].isQuestsLoaded;

export const getFilteredQuestCards = createSelector(
  getQuestCards,
  getActiveFilter,
  (cards, filter) => {
    if (filter === QuestTab.All.type) {
      return cards;
    }

    return cards.filter((card) => card.type === filter);
  }
);
