import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  margin-top: 150px;
`;

const PageText = styled.p`
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 120%;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  word-break: break-word;
`;

export {
  Container,
  PageText,
};
