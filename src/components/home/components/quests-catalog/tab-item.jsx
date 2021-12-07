import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'store/quests-reducer/reducer';
import { getActiveFilter } from 'store/quests-reducer/selectors';
import * as S from './quests-catalog.styled';

const TabItem = ({ icon, title, type }) => {
  const activeFilter = useSelector(getActiveFilter);

  const isActive = activeFilter === type;

  const dispatch = useDispatch();

  const onTabBtnClick = () => {
    dispatch(setFilter(type));
  }

  return (
    <S.TabItem>
      <S.TabBtn
        isActive={isActive}
        onClick={onTabBtnClick}
      >
        <S.TabImage src={icon}/>
        <S.TabTitle>{title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
};

export default TabItem;
