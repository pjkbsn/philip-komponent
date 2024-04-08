import Toast from "./components/Toast/Toast";
import "./styles.scss";

const App = () => {
  return (
    <>
      <Toast message="Success" type="success" />
      <Toast message="ERROR" type="error" />
      <Toast message="InfoRutaheheheheheheeheh" type="info" />
    </>
  );
};

export default App;
