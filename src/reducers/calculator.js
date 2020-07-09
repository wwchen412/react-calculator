import {
  GET_NUM,
  PRESS_AC,
  GET_OPERATOR,
  SET_SIGN,
  PRESS_CALCULATE,
  GET_PERCENT,
} from "../actions";

const initialSate = {
  inputValue: "0",
  resultValue: 0,
  calculator: [],
  calculatorString: "",
  isOperatored: false,
  isCalculatored: false,
};

const calculator = (state = initialSate, action) => {
  switch (action.type) {
    case GET_NUM:
      if (state.isCalculatored) {
        return {
          ...initialSate,
          inputValue: action.num,
          calculator: [],
        };
      }
      if (state.inputValue === "0" || state.isOperatored) {
        return {
          ...state,
          inputValue: action.num,
          isOperatored: false,
        };
      }
      return {
        ...state,
        inputValue: state.inputValue + action.num,
        isOperatored: false,
      };
    case PRESS_AC:
      return {
        ...initialSate,
        calculator: [],
      };
    case GET_PERCENT: {
      const addDotNum = state.inputValue * 0.01
      return {
        ...state,
        inputValue: addDotNum.toString(),
      };
    }
    case GET_OPERATOR:
      const symbol = action.operator;
      const { inputValue, calculator, isOperatored, isCalculatored } = state;
      if (!isOperatored && !isCalculatored) {
        calculator.push(inputValue);
        const exportString = calculator.toString().replace(/,/g, "");
        const exportValue = eval(exportString);
        calculator.push(symbol);
        return {
          ...state,
          isOperatored: true,
          calculatorString: exportString,
          resultValue: exportValue,
          inputValue: exportValue.toString(),
        };
      }
      if (isCalculatored) {
        calculator.push(symbol);
        return {
          ...state,
          isCalculatored: false,
          isOperatored: true,
        };
      }
      return {
        ...state,
        calculator: calculator,
      };
    case SET_SIGN:

      const value = state.inputValue * -1;
      return {
        ...state,
        inputValue: value.toString(),
      };
    case PRESS_CALCULATE:
      if (!state.isCalculatored) {
        state.calculator.push(state.inputValue);
        const exportString = state.calculator.toString().replace(/,/g, "");
        const exportValue = eval(exportString);
        return {
          ...state,
          resultValue: exportValue,
          calculatorString: exportString,
          inputValue: exportValue.toString(),
          isCalculatored: true,
        };
      }
    default:
      return {
        ...state,
      };
  }
};

export default calculator;
