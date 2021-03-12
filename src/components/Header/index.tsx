import React from "react";

import Toggle from "../Toggle";

import { Container, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Hi There</Title>

      <Toggle />
    </Container>
  );
};

export default Header;
