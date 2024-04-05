import "./Button.scss";

type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
  type: string;
  children: string;
};

const Button = ({ clickEvent, type, children }: ButtonProps) => (
  <button className={`Button ${type}`} onClick={clickEvent}>
    {children}
  </button>
);

export default Button;
