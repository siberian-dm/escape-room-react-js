import * as S from './header.styled';

const NavItem = ({ title, isActive, path }) => (
  <S.LinkItem>
    <S.Link
      $isActiveLink={isActive}
      to={path}
    >
      {title}
    </S.Link>
  </S.LinkItem>
);

export default NavItem;
