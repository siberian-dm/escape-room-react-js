import { useSelector } from 'react-redux';
import { getFilteredQuestCards } from 'store/quests-reducer/selectors';
import QuestsCard from './quest-card';
import * as S from './quests-catalog.styled';

const QuestList = () => {
  const questCards = useSelector(getFilteredQuestCards);

  return (
    <S.QuestsList>
      {questCards.map((card) => (
        <QuestsCard
          key={card.id}
          card={card}
        />)
      )}
    </S.QuestsList>
  );
};

export default QuestList;
