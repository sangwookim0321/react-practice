import React, { useState } from "react";
import TabPresentation from "./TabPresentation";

type Tab = {
  title: string;
  content: string;
};

interface TabContainerProps {
  tabs: Tab[];
}

const TabContainer: React.FC<TabContainerProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <TabPresentation
      tabs={tabs}
      activeTab={activeTab}
      handleTabChange={handleTabChange}
    />
  );
};

export default TabContainer;
