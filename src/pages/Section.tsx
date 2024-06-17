import Tab from '../containers/tab-layout';

function Section() {
  return (
    <div>
      <h1>Section</h1>
      <Tab defaultValue="tab1">
        <Tab.List>
          <Tab.Trigger value="tab1">Tab 1</Tab.Trigger>
          <Tab.Trigger value="tab2">Tab 2</Tab.Trigger>
        </Tab.List>
        <Tab.Content value="tab1">Content for Tab 1</Tab.Content>
        <Tab.Content value="tab2">Content for Tab 2</Tab.Content>
      </Tab>
    </div>
  );
}

export default Section;
