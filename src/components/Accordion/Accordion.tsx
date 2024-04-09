import { useState } from "react";
import "./Accordion.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

type AccordionProps = {
  data: { box: string; boxText: string }[];
};

export const Accordion = ({ data }: AccordionProps) => {
  const [visible, setVisible] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setVisible((prevVisible) => (prevVisible === index ? null : index));
  };

  return (
    <div className="Accordion">
      {data.map((items, i) => (
        <div key={i}>
          <div className="title" onClick={() => handleClick(i)}>
            <h2 className="header">{items.box}</h2>
            <span className="showIfCollapsed">
              {visible === i ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </div>
          <div className={`text ${visible === i ? "show" : ""}`}>
            {items.boxText}
          </div>
        </div>
      ))}
    </div>
  );
};
