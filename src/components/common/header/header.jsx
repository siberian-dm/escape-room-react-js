import NavItem from './nav-item';
import { Logo, AppPage } from 'const';
import { useLocation } from 'react-router';
import * as S from './header.styled';

const Header = () => {
  const { pathname } = useLocation();

  return (
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
            {Object.values(AppPage).map(({ path, title }) => (
              <NavItem
                key={title}
                title={title}
                isActive={pathname === path}
                path={path}
              />
            ))}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
