import { combineReducers } from 'redux'
import { ReducerName } from 'const'
import questReducer from './quests-reducer/reducer';

const rootReducer = combineReducers({
  [ReducerName.Quests]: questReducer,
});

export default rootReducer;
