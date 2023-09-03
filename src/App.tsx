import "./App.css";
import { Example } from "./components/Example/Example";
// import { Example } from "./components/Example/Example";
import { UsersFromServersF } from "./components/UsersFromServer/UsersFromServer";

function App() {
  return (
    <>
      <Example></Example>
      <UsersFromServersF />
    </>
  );
}

export default App;
