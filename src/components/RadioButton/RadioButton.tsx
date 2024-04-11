import "./RadioButton.scss";

type RadioProps = {
  data: { name: string }[];
};

export const RadioButton = ({ data }: RadioProps) => {
  const handleClick = (i) => {
    console.log(`Klickade på ${i}`);
  };

  return (
    <fieldset className="RadioButton">
      <legend>Select an option</legend>
      {data.map((name, i) => (
        <div key={i} className="radioWrapper">
          <label
            htmlFor={`radio_${i}`}
            onClick={() => {
              handleClick(i);
            }}
          >
            {name.name}
          </label>
          <input type="radio" id={`radio_${i}`} name="radio" />
        </div>
      ))}
    </fieldset>
  );
};
