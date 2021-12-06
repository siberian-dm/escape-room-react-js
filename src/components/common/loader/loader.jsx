import * as S from './loader.styled';

const Loader = () => (
  <S.Container>
    <S.LoadingText>Загрузка...</S.LoadingText>
    <S.SvgIcon>
      <circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth="10" r="40" strokeDasharray="188.49555921538757 64.83185307179586">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1">
        </animateTransform>
      </circle>
    </S.SvgIcon>
  </S.Container>
);

export default Loader;
