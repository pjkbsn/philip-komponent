import "./RadioButton.scss";

type RadioProps = {
  data: { name: string }[];
};

export const RadioButton = ({ data }: RadioProps) => {
  return (
    <>
      <fieldset>
        <legend>Select an option</legend>
        {data.map((name, i) => (
          <div key={i} className="wrapper">
            <label htmlFor={`${name.name}`} className="radiolabel">{name.name}</label>
            <input
              type="radio"
              id={`${name.name}`}
              value={`${name.name}`}
              name="radio"
              className="radioinput"
            />
          </div>
        ))}
      </fieldset>
    </>
  );
};
