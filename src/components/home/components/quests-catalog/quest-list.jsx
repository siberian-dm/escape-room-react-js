import QuestsCard from './quest-card';
import { useSelector } from 'react-redux';
import { getFilteredQuestCards } from 'store/quests-reducer/selectors';
import * as S from './quests-catalog.styled';

const QuestList = () => {
  const questCards = useSelector(getFilteredQuestCards);

  return (
    <>
      {questCards.length === 0
      ? <S.NoQuestsTitle>Нет доступных квестов для прохождения.</S.NoQuestsTitle>
      :
      (<S.QuestsList>
        {questCards.map((card) => (
          <QuestsCard
            key={card.id}
            card={card}
          />)
        )}
      </S.QuestsList>)}
    </>
  );
};

export default QuestList;
