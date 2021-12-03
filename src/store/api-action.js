import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, ReducerName } from 'const';
import { createAPI } from 'services/api';
import { FetchState } from 'const';

const api = createAPI();

export const fetchQuestCards = createAsyncThunk(
  'quests/fetchQuestCards',
  async (_arg, { getState, requestId }) => {
    const { currentRequestId, fetchState } = getState()[ReducerName.Quests];

    if (fetchState !== FetchState.Pending || requestId !== currentRequestId) {
      return;
    }

    const { data } = await api.get(APIRoute.Quest);
    return data;
  }
);
