import React, { useState } from "react";

import { Container, Notch, Crater, Small, Medium, Large } from "./styles";

const Toggle: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled((s) => !s);
  }

  return (
    <Container
      onClick={handleClick}
      className={`toggle${toggled ? "night" : "day"}`}
    >
      <Notch>
        <Crater />
        <Crater />
      </Notch>
      <div>
        <Small />
        <Medium />
        <Large />
      </div>
    </Container>
  );
};

export default Toggle;
