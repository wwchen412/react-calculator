import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { colors, device } from "./variableStyle";
import StyleButton from "./Button";

import { useSelector, useDispatch } from "react-redux";
import {
  getNum,
  pressAC,
  getOperator,
  setSign,
  pressCalculate,
  getPercent,
  closeModal,
} from "../actions";

const Calculator = ({ className, children }) => {
  const outPutText = useSelector((state) => state.calculator.inputValue);
  const operatorText = useSelector(
    (state) => state.calculator.calculatorString
  );
  const dispatch = useDispatch();
  const myRef = useRef();
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      id="calculator"
      className={className + " " + className + "__bg"}
      ref={myRef}
    >
      <div className={className + "__output"}>
        <h3>{operatorText}</h3>
        <h1>{outPutText}</h1>
      </div>

      <div className={className + "__input"}>
        <StyleButton buttonText="AC" onClick={() => dispatch(pressAC())} />
        <StyleButton buttonText="+/-" onClick={() => dispatch(setSign())} />
        <StyleButton buttonText="%" onClick={() => dispatch(getPercent())} />
        <StyleButton
          buttonText="÷"
          className="button--primary"
          onClick={() => dispatch(getOperator("/"))}
        />
        <StyleButton
          buttonText="7"
          className="button--dark"
          onClick={() => dispatch(getNum("7"))}
        />
        <StyleButton
          buttonText="8"
          className="button--dark"
          onClick={() => dispatch(getNum("8"))}
        />
        <StyleButton
          buttonText="9"
          className="button--dark"
          onClick={() => dispatch(getNum("9"))}
        />
        <StyleButton
          buttonText="×"
          className="button--primary"
          onClick={() => dispatch(getOperator("*"))}
        />
        <StyleButton
          buttonText="4"
          className="button--dark"
          onClick={() => dispatch(getNum("4"))}
        />
        <StyleButton
          buttonText="5"
          className="button--dark"
          onClick={() => dispatch(getNum("5"))}
        />
        <StyleButton
          buttonText="6"
          className="button--dark"
          onClick={() => dispatch(getNum("6"))}
        />
        <StyleButton
          buttonText="-"
          className="button--primary"
          onClick={() => dispatch(getOperator("-"))}
        />
        <StyleButton
          buttonText="1"
          className="button--dark"
          onClick={() => dispatch(getNum("1"))}
        />
        <StyleButton
          buttonText="2"
          className="button--dark"
          onClick={() => dispatch(getNum("2"))}
        />
        <StyleButton
          buttonText="3"
          className="button--dark"
          onClick={() => dispatch(getNum("3"))}
        />
        <StyleButton
          buttonText="+"
          className="button--primary"
          onClick={() => dispatch(getOperator("+"))}
        />
        <StyleButton
          buttonText="0"
          className="button--lg button--dark"
          onClick={() => dispatch(getNum("0"))}
        />
        <StyleButton
          buttonText="."
          className="button--dark"
          onClick={() => dispatch(getNum("."))}
        />
        <StyleButton
          buttonText="="
          className="button--primary"
          onClick={() => dispatch(pressCalculate())}
        />
      </div>
    </div>
  );
};

const StyledCalculator = styled(Calculator)`
  padding: 5px;
  height: 50vh;
  overflow-y: scroll;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  margin: auto;
  @media ${device.mobileL} {
    position: static;
    max-width: 360px;
    height: auto;
    overflow: initial;
  }
  @media ${device.tablet} {
    max-width: 480px;
  }
  &__output {
    color: #fff;
    text-align: right;
    font-size: 2rem;

    h1 {
      font-size: 4rem;
      text-align: right;
      padding: 5px;
      @media ${device.tablet} {
        font-size: 6rem;
      }
    }
    h3 {
      height: 2rem;
    }
  }
  &__bg {
    background-image: linear-gradient(
      to bottom,
      ${colors.bgPrimaryLight},
      ${colors.bgPrimaryDark}
    );
  }
  &__input {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default StyledCalculator;
