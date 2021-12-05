import Loader from 'components/common/loader/loader';
import useFetch from 'hooks/use-fetch';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { BookingModal } from './components/components';
import { APIRoute, AppRoute, questLevels } from 'const';
import * as S from './detailed-quest.styled';

const NOT_FOUND_STATUS_CODE = 404;

const questTypes = {
  adventures: 'приключения',
  horror: 'ужасы',
  mystic: 'мистика',
  detective: 'детектив',
  'sci-fi': 'sci-fi',
};

const DetailedQuest = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`${APIRoute.Quests}/${id}`)

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpened(false);
  };

  if (error && error.response.status === NOT_FOUND_STATUS_CODE ) {
    return <Redirect to={AppRoute.NotFound}/>;
  }

  if (data === null || isLoading) {
    return <Loader />;
  }

  const {
    title,
    description,
    coverImg,
    type,
    level,
    peopleCount,
    duration
  } = data;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{questTypes[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{questLevels[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal callback={handleCloseBookingModal}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
