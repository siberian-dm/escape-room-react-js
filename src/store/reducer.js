import { createSlice } from '@reduxjs/toolkit';
import { QuestTab, ReducerName } from 'const';
import { fetchQuestCards } from './api-action';
import { FetchState } from 'const';

const initialState = {
  questCards: [],
  activeFilter: QuestTab.All.type,
  isQuestsLoaded: false,
  fetchState: FetchState.Idle,
  currentRequestId: undefined,
  error: null,
}

const questsSlice = createSlice({
  name: ReducerName.Quests,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestCards.pending, (state, action) => {
        if (state.fetchState === FetchState.Idle) {
          state.fetchState = FetchState.Pending;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchQuestCards.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.fetchState === FetchState.Pending &&
          state.currentRequestId === requestId
        ) {
          state.questCards = action.payload;
          state.isQuestsLoaded = true;
          state.fetchState = FetchState.Idle;
          state.currentRequestId = undefined;
          state.error = null;
        }
      })
      .addCase(fetchQuestCards.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.fetchState === FetchState.Pending &&
          state.currentRequestId === requestId
        ) {
          state.fetchState = FetchState.Idle;
          state.error = action.error.message;
          state.currentRequestId = undefined;
        }
      })
  },
});

const { reducer, actions } = questsSlice;

export const { setFilter } = actions;
export default reducer;
