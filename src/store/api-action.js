import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, ReducerName } from 'const';
import { createAPI } from 'services/api';
import { FetchState } from 'const';

const FETCH_QUEST_CARDS_ACTION = 'quests/fetchQuestCards';

const api = createAPI();

export const fetchQuestCardsAction = createAsyncThunk(
  FETCH_QUEST_CARDS_ACTION,
  async (_arg, { getState, requestId }) => {
    const { currentRequestId, fetchState } = getState()[ReducerName.Quests];

    if (fetchState !== FetchState.Pending || requestId !== currentRequestId) {
      return;
    }

    const { data } = await api.get(APIRoute.Quest);
    return data;
  }
);
