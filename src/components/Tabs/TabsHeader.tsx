import { FC, useContext } from 'react';
import { TabItem } from './types';
import { TabContext } from './TabsProvider';
import cn from 'classnames';
import { compPrefix } from './constants';

interface TabsHeaderProps {
  items: TabItem[];
  classNameHeader?: string;
  classNameHeaderButtons?: string;
}

const buildBtnStyles = (activeKey: string, prevKey: string, className?: string) => {
  return cn(
    `${compPrefix}__tab_btn`,
    {
      [`${compPrefix}__tab_btn--active`]: activeKey === prevKey,
    },
    className
  );
};

export const TabsHeader: FC<TabsHeaderProps> = ({
  items,
  classNameHeader,
  classNameHeaderButtons,
}) => {
  const { activeKey, setActiveKey } = useContext(TabContext);
  return (
    <div className={cn(`${compPrefix}_header`, classNameHeader)}>
      {items.map(({ key, label }) => {
        return (
          <button
            key={key}
            className={buildBtnStyles(activeKey, key, classNameHeaderButtons)}
            onClick={() => setActiveKey(key)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
