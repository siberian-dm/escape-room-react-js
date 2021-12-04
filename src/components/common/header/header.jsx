import { Logo } from 'const';
import * as S from './header.styled';

const Header = () => (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image
          src={Logo.src}
          alt={Logo.alt}
          width={Logo.width}
          height={Logo.height}
        />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink to="/">
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="/contacts">Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
