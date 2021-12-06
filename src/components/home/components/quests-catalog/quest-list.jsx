import QuestsCard from './quest-card';
import { useSelector } from 'react-redux';
import { getFilteredQuestCards } from 'store/quests-reducer/selectors';
import * as S from './quests-catalog.styled';

const QuestList = () => {
  const questCards = useSelector(getFilteredQuestCards);

  return (
    <S.QuestsList>
      {questCards.length !== 0 && questCards.map((card) => (
        <QuestsCard
          key={card.id}
          card={card}
        />)
      )}
    </S.QuestsList>
  );
};

export default QuestList;
