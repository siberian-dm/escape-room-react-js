import { Container, Link, PageTitle } from 'components/common/common';
import { Logo } from 'const';
import * as S from './not-found.styled';

const NotFound = () => {
  return (
    <Container>
      <S.Main>
        <PageTitle>404</PageTitle>
        <S.NotFoundText>Страница не найдена.</S.NotFoundText>
        <Link to="/">
          <S.Image
            src={Logo.src}
            alt={Logo.alt}
            width={Logo.width}
            height={Logo.height}
          />
        </Link>
      </S.Main>
    </Container>
  );
};

export default NotFound;
