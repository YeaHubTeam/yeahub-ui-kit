import { FC, useContext } from 'react';
import { TabItem } from './types';
import { TabContext } from './TabsProvider';
import cn from 'classnames';

interface TabsContentProps {
  items: TabItem[];
  classNameContent?: string;
}

export const TabsContent: FC<TabsContentProps> = ({ items, classNameContent }) => {
  const { activeKey } = useContext(TabContext);
  const currentItem = items.find((item) => item.key === activeKey);
  if (!currentItem) {
    return null;
  }
  const { children } = currentItem;
  return <div className={cn(classNameContent)}>{children}</div>;
};
