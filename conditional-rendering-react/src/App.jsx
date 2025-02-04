import UserGreeting from "./UserGreeting";
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Siddappa" />
      <h1>Default props</h1>
      <UserGreeting />
    </>
  );
}

export default App;
