import React from "react";
import styled from "styled-components";
import { colors } from "./variableStyle";
const StyledOpenButton = styled.button`
  color: ${colors.white};
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  background: ${colors.bgPrimary};
  &:hover {
    filter: brightness(90%);
  }
`;
const OpenModal = (props) => {
  return (
    <StyledOpenButton onClick={props.onClick}>Open Calculator</StyledOpenButton>
  );
};

export default OpenModal;
