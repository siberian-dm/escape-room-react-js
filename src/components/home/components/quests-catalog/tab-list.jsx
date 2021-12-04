import { QuestTab } from 'const';
import TabItem from './tab-item';
import * as S from './quests-catalog.styled';

const TabList = () => (
  <S.Tabs>
    {Object.values(QuestTab).map(({ type, icon, title }) => (
      <TabItem
        key={type}
        icon={icon}
        title={title}
        type={type}
      />
    ))}
  </S.Tabs>
);

export default TabList;
