import { useState } from "react";
import "./InputField.scss";

export const InputField = () => {
  const [activate, setActivate] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [listItems, setListItems] = useState<string[]>([]);

  const handleClick = () => {
    setListItems([...listItems, inputValue]);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value) {
      setActivate(true);
      setInputValue(event.target.value);
    } else setActivate(false);
  };

  return (
    <div className="inputField">
      <input type="text" onChange={handleChange} />

      <button
        onClick={handleClick}
        disabled={!activate}
        className={`inputButton ${activate ? "enabled" : ""}`}
      >
        Submit
      </button>
      <div className="listContainer">
        <ul>
          {listItems.map((item, i) => (
            <li key={i} className="listItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Gör en komponent med ett inputfält, knapp och punktlista. Knappen är disabled när inputfältet är tomt.
// När man skriver i inputfältet blir knappen aktiverad och detta synliggörs med en animation. Knappen har animationer vid hover och klick när den inte är disabled.
// När man klickar på knappen läggs det som står i inputfältet till som en punkt i listan. Varje punkt ska stylas som en box med ram.
//  Ingen punkt (alltså själva punkten ⚫) från punktlistan utan bara en ruta med texten. När rutan läggs till ska den ha en animation.
