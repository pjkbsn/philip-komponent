import Toast from "./components/Toast/Toast";
import "./styles.scss";

const App = () => {
  return (
    <>
      <Toast message="Success" duration={6000} type="success" />
      <Toast message="ERROR" duration={6000} type="error" />
      <Toast message="InfoRuta" duration={6000} type="info" />
    </>
  );
};

export default App;
