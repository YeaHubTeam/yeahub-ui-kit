import { createContext, useMemo, useState } from 'react';

interface TabContextProps {
  activeKey: string;
  setActiveKey: (activeKey: string) => void;
}

export const TabContext = createContext<TabContextProps>({} as TabContextProps);

interface TabContextProviderProps {
  children: React.ReactNode;
  defaultValue: string;
}
export const TabContextProvider = ({
  children,
  defaultValue,
}: TabContextProviderProps) => {
  const [activeKey, setActiveKey] = useState(defaultValue || '1');

  const initialValue = useMemo(
    () => ({
      activeKey,
      setActiveKey,
      defaultValue,
    }),
    [activeKey, defaultValue]
  );
  return <TabContext.Provider value={initialValue}>{children}</TabContext.Provider>;
};
