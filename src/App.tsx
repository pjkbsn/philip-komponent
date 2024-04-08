import Sidebar from "./components/Sidebar/Sidebar";
import Toast from "./components/Toast/Toast";
import "./styles.scss";

const App = () => {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <Sidebar items={items} />
      <Toast message="Success" type="success" />
      <Toast message="ERROR" type="error" />
      <Toast message="InfoRutaheheheheheheeheh" type="info" />
    </>
  );
};

export default App;
