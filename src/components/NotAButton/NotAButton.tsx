import { useEffect, useState } from "react";
import "./NotAButton.scss";

type NotAButtonProps = {
  text: string;
};

export const NotAButton: React.FC<NotAButtonProps> = ({ text }) => {
  const [animateClass, setAnimateClass] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState<string>("");

  useEffect(() => {
    if (animateClass) {
      setActiveAnimation("animate");

      setTimeout(() => {
        setAnimateClass(false);
        setActiveAnimation("");
      }, 3000);
    }
  }, [animateClass]);

  return (
    <>
      <div className={`container ${activeAnimation}`}>
        <h1
          onClick={() => {
            setAnimateClass(true);
          }}
        >
          {text}
        </h1>
      </div>
    </>
  );
};

// Gör en komponent som ser ut som en knapp men den fungerar mer som en checkbox.
//  När man klickar i den får den en ny ram (eller något annat nytt utseende).
//  En animation vid hover och en när man klickar.
