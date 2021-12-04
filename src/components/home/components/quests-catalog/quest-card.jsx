import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { APIRoute, QuestImage } from 'const';
import * as S from './quests-catalog.styled';

const questLevels = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'простой',
}

const QuestCard = ({ card }) => {

  const {
    id,
    title,
    previewImg,
    level,
    peopleCount,
  } = card;

  return (
      <S.QuestItem>
        <S.QuestItemLink to={`${APIRoute.Quest}/${id}`}>
          <S.Quest>
            <S.QuestImage
              src={previewImg}
              width={QuestImage.width}
              height={QuestImage.height}
              alt={`квест ${title}`}
            />
            <S.QuestContent>
              <S.QuestTitle>{title}</S.QuestTitle>
              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {`${peopleCount[0]}–${peopleCount[1]} чел`}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {questLevels[level]}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
    );
};

export default QuestCard;
