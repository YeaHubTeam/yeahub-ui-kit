import { FC, useContext } from 'react';
import { TabItem } from './types';
import { TabContext } from './TabsProvider';
import cn from 'classnames';
import { compPrefix } from './constants';

interface TabsHeaderProps {
  items: TabItem[];
}

const buildBtnStyles = (activeKey: string, prevKey: string) => {
  return cn(`${compPrefix}__tab_btn`, {
    [`${compPrefix}__tab_btn--active`]: activeKey === prevKey,
  });
};

export const TabsHeader: FC<TabsHeaderProps> = ({ items }) => {
  const { activeKey, setActiveKey } = useContext(TabContext);
  return (
    <div className={'tabs_header'}>
      {items.map(({ key, label }) => {
        return (
          <button
            key={key}
            className={buildBtnStyles(activeKey, key)}
            onClick={() => setActiveKey(key)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
