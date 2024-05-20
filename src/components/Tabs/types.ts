export type TabItem = {
  key: string;
  label: string;
  children: React.ReactNode;
};

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  onChange: (activeKey: string) => void;
}
