import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import questsReducer from 'store/reducer';
import { fetchQuestCards } from 'store/api-action';
import { ReducerName } from 'const';

const store = configureStore({
  reducer: {
    [ReducerName.Quests]: questsReducer,
  },
});

store.dispatch(fetchQuestCards())

render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
