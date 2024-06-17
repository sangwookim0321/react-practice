import * as RadixTab from '@radix-ui/react-tabs';
import styles from './index.module.css';

interface TabLayoutProps {
  children: React.ReactNode;
  defaultValue?: string;
}

const Tab: React.FC<TabLayoutProps> & {
  List: React.FC<{ children: React.ReactNode }>;
  Trigger: React.FC<{ value: string; children: React.ReactNode }>;
  Content: React.FC<{ value: string; children: React.ReactNode }>;
} = ({ children, defaultValue }) => {
  return (
    <RadixTab.Root className={styles.tabs_root} defaultValue={defaultValue}>
      {children}
    </RadixTab.Root>
  );
};

const TabList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <RadixTab.List className={styles.tabs_list}>{children}</RadixTab.List>;
};

const TabTrigger: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  return (
    <RadixTab.Trigger className={styles.tabs_trigger} value={value}>
      {children}
    </RadixTab.Trigger>
  );
};

const TabContent: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  return (
    <RadixTab.Content className={styles.tabs_content} value={value}>
      {children}
    </RadixTab.Content>
  );
};

Tab.List = TabList;
Tab.Trigger = TabTrigger;
Tab.Content = TabContent;

export default Tab;
