import { createContext, useMemo, useState } from 'react';

interface TabContextProps {
  activeKey: string;
  setActiveKey: (activeKey: string) => void;
}

export const TabContext = createContext<TabContextProps>({} as TabContextProps);

interface TabContextProviderProps {
  children: React.ReactNode;
  defaultValue: string;
  onChange?: (activeKey: string) => void;
}
export const TabContextProvider = ({
  children,
  defaultValue,
  onChange,
}: TabContextProviderProps) => {
  const [activeKey, setActiveKeyState] = useState(defaultValue || '1');

  const setActiveKey = (key: string) => {
    setActiveKeyState(key);
    if (onChange) {
      onChange(key);
    }
  };

  const value = useMemo(() => ({ activeKey, setActiveKey }), [activeKey]);

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
