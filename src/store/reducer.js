import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'const';
import { fetchQuestCards } from './api-action';
import { FetchState } from 'const';

const initialState = {
  questCards: [],
  isQuestsLoaded: false,
  fetchState: FetchState.Idle,
  currentRequestId: undefined,
  error: null,
}

const questsSlice = createSlice({
  name: ReducerName.Quests,
  initialState,
  reducers: {},
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

const { reducer } = questsSlice;

export default reducer;
