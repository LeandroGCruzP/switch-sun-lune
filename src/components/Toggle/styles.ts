import styled from "styled-components";

export const Container = styled.div`
  height: 27px;
  width: 52px;
  border-radius: 50px;
  background-image: linear-gradient(aqua, skyblue);
  position: relative;
  cursor: pointer;

  &.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }
`;

export const Notch = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 1px;
  left: 1px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: all 0.3s ease;

  &.night {
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(25px, 0);
  }
`;

export const Crater = styled.div``;

export const Small = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;

  height: 2px;
  width: 15px;
  top: 45%;
  left: 60%;

  transition: all 0.3s ease;

  &.night {
    height: 2px;
    width: 2px;
    transform: translate(-13px, 0);
  }
`;

export const Medium = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;

  height: 3px;
  width: 20px;
  top: 25%;
  left: 25%;
  z-index: 2;

  transition: all 0.3s ease;
`;

export const Large = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;

  height: 5px;
  width: 27px;
  bottom: 4px;
  left: 25%;

  transition: all 0.3s ease;
`;
