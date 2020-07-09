import React from "react";
import styled from "styled-components";
import {colors,device} from "./variableStyle";
import StyleButton from "./Button";

import { useSelector,useDispatch } from 'react-redux';
import { getNum, pressAC, getOperator, setSign, pressCalculate, getPercent }from '../actions';

const StyledCalculator = styled.div`
  .calculator{
    height:50vh;
    overflow:scroll;
    @media ${device.mobileL}{
      height:auto;
      overflow:initial;
    }
    &__output{
      color:#fff;
      text-align:right;
      font-size: 2rem;

      h1{
      font-size: 4rem;
      text-align: right;
      padding:5px;
      /* padding-top:3rem; */
      @media ${device.mobileL}{
        font-size: 6rem;
      }

    }

    }
    &__container{
      max-width: 450px;
      padding: 5px;
    }
    &__bg{
      background-image:linear-gradient(to bottom,${colors.bgPrimaryLight},${colors.bgPrimaryDark})
    }
    &__input{
      display:flex;
      justify-content:space-around;
      flex-wrap:wrap;
    }
  }


`;

const Calculator = () => {
  const outPutText = useSelector(state => state.inputValue);
  const operatorText = useSelector(state => state.calculatorString);
  const dispatch = useDispatch();
  return (
    <StyledCalculator >
      <div className="calculator">
        <div className="calculator__container calculator__bg">
          <div className="calculator__output">
            <h3>{operatorText}</h3>
            <h1>{outPutText}</h1>
          </div>

          <div className="calculator__input">
            <StyleButton buttonText="AC" onClick={()=>dispatch(pressAC())}/>
            <StyleButton buttonText="+/-" onClick={()=>dispatch(setSign())}/>
            <StyleButton buttonText="%" onClick={()=>dispatch(getPercent())}/>
            <StyleButton buttonText="÷" className="button--primary" onClick={()=>dispatch(getOperator("/"))}/>
            <StyleButton buttonText="7" className="button--dark" onClick={()=>dispatch(getNum("7"))} />
            <StyleButton buttonText="8" className="button--dark" onClick={()=>dispatch(getNum("8"))}/>
            <StyleButton buttonText="9" className="button--dark" onClick={()=>dispatch(getNum("9"))}/>
            <StyleButton buttonText="×" className="button--primary" onClick={()=>dispatch(getOperator("*"))}/>
            <StyleButton buttonText="4" className="button--dark" onClick={()=>dispatch(getNum("4"))}/>
            <StyleButton buttonText="5" className="button--dark" onClick={()=>dispatch(getNum("5"))}/>
            <StyleButton buttonText="6" className="button--dark" onClick={()=>dispatch(getNum("6"))}/>
            <StyleButton buttonText="-" className="button--primary" onClick={()=>dispatch(getOperator("-"))}/>
            <StyleButton buttonText="1" className="button--dark" onClick={()=>dispatch(getNum("1"))}/>
            <StyleButton buttonText="2" className="button--dark" onClick={()=>dispatch(getNum("2"))}/>
            <StyleButton buttonText="3" className="button--dark" onClick={()=>dispatch(getNum("3"))}/>
            <StyleButton buttonText="+" className="button--primary" onClick={()=>dispatch(getOperator("+"))}/>
            <StyleButton buttonText="0" className="button--lg button--dark" onClick={()=>dispatch(getNum("0"))}/>
            <StyleButton buttonText="." className="button--dark" onClick={()=>dispatch(getNum("."))}/>
            <StyleButton buttonText="=" className="button--primary" onClick={()=>dispatch(pressCalculate())}/>

          </div>
        </div>
      </div>
    </StyledCalculator>
  )
};
export default Calculator;
