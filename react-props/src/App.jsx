import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Siddappa" age={30} isStudent={true} />
      <Student name="Parth09" age={20} isStudent={false} />
      <Student name="Arjun" age={25} isStudent={true} />
      {/* deafult props */}
      <Student />
    </>
  );
}

export default App;
