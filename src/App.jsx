import Auth from "./components/Auth";
import Crud from "./components/Crud";
import Storage from "./components/Storage";

function App() {
  return (
    <>
      <h1>Deployed on firebase hosting</h1>
      <p>featuring: Auth, Firestore and Storage</p>
      <hr />
      <Auth />
      <hr />
      <Crud />
      <hr />
      <Storage />
    </>
  );
}

export default App;
