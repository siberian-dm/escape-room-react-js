import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding-top: 50px;

  background-color: ${({ theme }) => theme.color.nero};
`;

const Image = styled.img``;

const NotFoundText = styled.h2`
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 120%;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  word-break: break-word;
`;

export {
  Main,
  Image,
  NotFoundText,
};
