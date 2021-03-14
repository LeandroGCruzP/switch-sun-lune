import React, { useState } from "react";

import { Container, Notch, Crater, Small, Medium, Large } from "./styles";

const Toggle: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled((s) => !s);
  }

  return (
    <Container onClick={handleClick} className={`${toggled ? "night" : ""}`}>
      <Notch className={`${toggled ? "night" : ""}`}>
        <Crater />
        <Crater />
      </Notch>
      <div>
        <Small className={`${toggled ? "night" : ""}`} />
        <Small className={`${toggled ? "night" : ""}`} />
        <Medium className={`${toggled ? "night" : ""}`} />
        <Large className={`${toggled ? "night" : ""}`} />
      </div>
    </Container>
  );
};

export default Toggle;
