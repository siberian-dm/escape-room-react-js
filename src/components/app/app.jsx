import Contacts from 'components/contacts/contacts';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Home from 'components/home/home';
import Loader from 'components/common/loader/loader';
import NotFound from 'components/not-found/not-found';
import { appTheme } from './common';
import { Router, Route, Switch, Redirect } from 'components/common/common';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppRoute } from 'const';
import { getIsQuestloaded } from 'store/quests-reducer/selectors';
import * as S from './app.styled';

const App = () => {
  const isDataloaded = useSelector(getIsQuestloaded);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      {isDataloaded
        ?
        (<Router>
          <Switch>
            <Route exact path={AppRoute.Quest}>
              <DetailedQuest />
            </Route>
            <Route exact path={AppRoute.Contacts}>
              <Contacts />
            </Route>
            <Route exact path={AppRoute.Root}>
              <Home />
            </Route>
            <Route exact path={AppRoute.NotFound}>
              <NotFound />
            </Route>
            <Route>
              <Redirect to={AppRoute.NotFound}/>
            </Route>
          </Switch>
        </Router>)
        :
        <Loader />}
    </ThemeProvider>
  );
};

export default App;
