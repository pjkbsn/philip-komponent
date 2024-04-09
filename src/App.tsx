import { Accordion } from "./components/Accordion/Accordion";
import Sidebar from "./components/Sidebar/Sidebar";
import Toast from "./components/Toast/Toast";
import "./styles.scss";

const App = () => {
  const items = ["Home", "About", "Services", "Contact"];
  const data = [
    {
      box: "Accordion 1",
      boxText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem sunt dolor? Quos laborum repellendus eveniet sint. Natus, eligendi, quae, deleniti eveniet maiores eos perferendis aliquid impedit tenetur recusandae molestias.",
    },
    {
      box: "Accordion 2",
      boxText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem sunt dolor? Quos laborum repellendus eveniet sint. Natus, eligendi, quae, deleniti eveniet maiores eos perferendis aliquid impedit tenetur recusandae molestias.",
    },
    {
      box: "Accordion 3",
      boxText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem sunt dolor? Quos laborum repellendus eveniet sint. Natus, eligendi, quae, deleniti eveniet maiores eos perferendis aliquid impedit tenetur recusandae molestias.",
    },
  ];
  return (
    <>
      <Sidebar items={items} />
      <Toast message="Success" type="success" />
      <Toast message="ERROR" type="error" />
      <Toast message="InfoRutaheheheheheheeheh" type="info" />
      <Accordion data={data} />
    </>
  );
};

export default App;
