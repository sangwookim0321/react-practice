import TabContainer from "../containers/TabContainer/TabContainer";

function Section() {
  const tabs = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
  ];
  return (
    <div>
      <h1>Section</h1>
      <TabContainer tabs={tabs} />
    </div>
  );
}

export default Section;
