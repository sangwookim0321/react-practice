import TabContainer from "../containers/TabContainer/TabContainer";

function Home() {
  const tabs = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
    { title: "Tab 3", content: "Content 3" },
  ];

  return (
    <>
      <h1>Home</h1>
      <TabContainer tabs={tabs} />
    </>
  );
}

export default Home;
