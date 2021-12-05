import App from 'components/app/app';
import rootReducer from 'store/root-reducer';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchQuestCardsAction } from 'store/api-action';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchQuestCardsAction())

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
