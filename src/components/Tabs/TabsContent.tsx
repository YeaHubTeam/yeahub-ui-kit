import { FC, useContext } from 'react';
import { TabItem } from './types';
import { TabContext } from './TabsProvider';

interface TabsContentProps {
  items: TabItem[];
}

export const TabsContent: FC<TabsContentProps> = ({ items }) => {
  const { activeKey } = useContext(TabContext);
  const ActiveItem = items.find((item) => item.key === activeKey)?.children;
  return <div>{ActiveItem}</div>;
};
