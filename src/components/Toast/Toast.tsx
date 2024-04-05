import "./Toast.scss";
import Button from "../Button/Button";
import { useState } from "react";

type ToastProps = {
  message: string;
  duration: number;
  type: "success" | "error" | "info";
};

const Toast: React.FC<ToastProps> = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), duration);
  };

  return (
    <>
      <Button clickEvent={handleClick} type={type}>
        {type}
      </Button>
      {visible && (
        <div className={`toast ${type}`}>
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Toast;
