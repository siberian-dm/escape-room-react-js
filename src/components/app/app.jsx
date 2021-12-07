import Contacts from 'components/contacts/contacts';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Home from 'components/home/home';
import Loader from 'components/common/loader/loader';
import NotFound from 'components/not-found/not-found';
import NotImplemented from 'components/not-implemented/not-implemented';
import { appTheme } from './common';
import { Router, Route, Switch, Redirect } from 'components/common/common';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppRoute, FetchState } from 'const';
import { getFetchState } from 'store/quests-reducer/selectors';
import * as S from './app.styled';

const App = () => {
  const fetchState = useSelector(getFetchState);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      {fetchState === FetchState.Pending
        ?
        <Loader />
        :
        (<Router>
          <Switch>
            <Route exact path={AppRoute.Root}>
              <Home />
            </Route>
            <Route exact path={AppRoute.Newbies}>
              <NotImplemented />
            </Route>
            <Route exact path={AppRoute.Promotions}>
              <NotImplemented />
            </Route>
            <Route exact path={AppRoute.Contacts}>
              <Contacts />
            </Route>
            <Route exact path={AppRoute.Quest}>
              <DetailedQuest />
            </Route>
            <Route exact path={AppRoute.NotFound}>
              <NotFound />
            </Route>
            <Route>
              <Redirect to={AppRoute.NotFound}/>
            </Route>
          </Switch>
        </Router>)}
    </ThemeProvider>
  );
};

export default App;
