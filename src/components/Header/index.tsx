import React from "react";

import {
  Container,
  Title,
  Toggle,
  Notch,
  Crater,
  Shape,
  Small,
  Medium,
  Large,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Hi There</Title>

      <Toggle>
        <Notch>
          <Crater />
          <Crater />
        </Notch>
        <Shape>
          <Small />
          <Small />
          <Medium />
          <Large />
        </Shape>
      </Toggle>
    </Container>
  );
};

export default Header;
