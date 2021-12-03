import { useSelector } from 'react-redux';
import { getQuestCards } from 'store/selectors';
import QuestsCard from './quest-card';
import * as S from './quests-catalog.styled';

const QuestList = () => {
  const questCards = useSelector(getQuestCards);

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
