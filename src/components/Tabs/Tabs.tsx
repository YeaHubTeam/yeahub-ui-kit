import { FC, memo } from 'react';
import { TabsProps } from './types';
import { TabContextProvider } from './TabsProvider';
import { TabsHeader } from './TabsHeader';
import { TabsContent } from './TabsContent';
import { compPrefix } from './constants';

export const Tabs: FC<TabsProps> = memo((props) => {
  const { defaultActiveKey = '1' } = props;
  return (
    <TabContextProvider defaultValue={defaultActiveKey}>
      <div className={`${compPrefix}`}>
        <TabsHeader {...props} />
        <TabsContent {...props} />
      </div>
    </TabContextProvider>
  );
});

Tabs.displayName = 'Tabs';
