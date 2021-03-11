import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 0 30px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 33px;
`;

export const Toggle = styled.div`
  height: 27px;
  width: 52px;
  border-radius: 50px;
  background-image: linear-gradient(aqua, skyblue);
  position: relative;
  cursor: pointer;
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
`;

export const Crater = styled.div``;

export const Shape = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
`;

export const Small = styled.div`
  height: 1px;
  width: 15px;
  top: 50%;
  left: 60%;
`;

export const Medium = styled.div`
  height: 2px;
  width: 20px;
  top: 25%;
  left: 25%;
`;

export const Large = styled.div`
  height: 4px;
  width: 40px;
  bottom: 3px;
  left: 25%;
`;
