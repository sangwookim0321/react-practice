type Tab = {
  title: string;
  content: string;
};

interface TabPresentationProps {
  tabs: Tab[];
  activeTab: number;
  handleTabChange: (tabIndex: number) => void;
}

const TabPresentation: React.FC<TabPresentationProps> = ({
  tabs,
  activeTab,
  handleTabChange,
}) => {
  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => handleTabChange(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabPresentation;
