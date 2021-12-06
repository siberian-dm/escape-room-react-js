import { createSlice } from '@reduxjs/toolkit';
import { QuestTab, ReducerName } from 'const';
import { fetchQuestCardsAction } from '../api-action';
import { FetchState } from 'const';

const initialState = {
  questCards: [],
  activeFilter: QuestTab.All.type,
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
      .addCase(fetchQuestCardsAction.pending, (state, action) => {
        if (state.fetchState === FetchState.Idle) {
          state.fetchState = FetchState.Pending;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchQuestCardsAction.fulfilled, (state, action) => {
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
      .addCase(fetchQuestCardsAction.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.fetchState === FetchState.Pending &&
          state.currentRequestId === requestId
        ) {
          state.fetchState = FetchState.Idle;
          state.error = action.error.message;
          state.currentRequestId = undefined;
        }
      });
  },
});

const { reducer, actions } = questsSlice;

export const { setFilter } = actions;
export default reducer;
