import { Accordion } from "./components/Accordion/Accordion";
import { InputField } from "./components/InputField/InputField";
import { NotAButton } from "./components/NotAButton/NotAButton";
import { RadioButton } from "./components/RadioButton/RadioButton";
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

  const radioData = [
    {
      name: "Option 1",
    },
    {
      name: "Option 2",
    },
    {
      name: "Option 3",
    },
  ];

  return (
    <>
      <Sidebar items={items} />
      <Toast message="Success" type="success" />
      <Toast message="ERROR" type="error" />
      <Toast message="InfoRutaheheheheheheeheh" type="info" />
      <Accordion data={data} />
      <RadioButton data={radioData} />
      <NotAButton text="CLICK ME!!" />
      <InputField />
    </>
  );
};

export default App;
