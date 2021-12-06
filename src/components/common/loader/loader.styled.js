import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  width: 100vw;
  min-height: 100vh;

  padding-top: 50px;

  background-color: ${({ theme }) => theme.color.nero};
`;

const SvgIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '60px',
  height: '60px',
  viewBox: '0 0 100 100',
  preserveAspectRatio: 'xMidYMid',
})`
  background: none;
  display: block;
  shape-rendering: auto;
`
const LoadingText = styled.h2`
  display: block;
  margin: 0px;
  height: 60px;
  padding-top: 15px;
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

export { Container, SvgIcon, LoadingText };
