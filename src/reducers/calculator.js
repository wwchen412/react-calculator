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
  const { inputValue, calculator, isOperatored, isCalculatored } = state;
  switch (action.type) {
    case GET_NUM:
      if (isCalculatored) {
        return {
          ...initialSate,
          inputValue: action.num,
          calculator: [],
        };
      }
      if (inputValue === "0" || isOperatored) {
        return {
          ...state,
          inputValue: action.num,
          isOperatored: false,
        };
      }
      return {
        ...state,
        inputValue: inputValue + action.num,
        isOperatored: false,
      };
    case PRESS_AC:
      return {
        ...initialSate,
        calculator: [],
      };
    case GET_PERCENT: {
      const addDotNum = inputValue * 0.01;
      return {
        ...state,
        inputValue: addDotNum.toString(),
      };
    }
    case GET_OPERATOR:
      const symbol = action.operator;

      const updateCalculator = [...calculator];
      if (!isOperatored && !isCalculatored) {
        updateCalculator.push(inputValue);
        const exportString = updateCalculator.toString().replace(/,/g, "");
        const exportValue = eval(exportString);
        updateCalculator.push(symbol);
        return {
          ...state,
          isOperatored: true,
          calculatorString: exportString,
          resultValue: exportValue,
          inputValue: exportValue.toString(),
          calculator: updateCalculator,
        };
      }
      if (isCalculatored) {
        updateCalculator.push(symbol);
        return {
          ...state,
          isCalculatored: false,
          isOperatored: true,
          calculator: updateCalculator,
        };
      }
      return {
        ...state,
        calculator: updateCalculator,
      };
    case SET_SIGN:
      const value = inputValue * -1;
      return {
        ...state,
        inputValue: value.toString(),
      };
    case PRESS_CALCULATE:
      if (!isCalculatored) {
        const updateCaculator = [...calculator];
        updateCaculator.push(inputValue);
        const exportString = updateCaculator.toString().replace(/,/g, "");
        const exportValue = eval(exportString);
        return {
          ...state,
          resultValue: exportValue,
          calculatorString: exportString,
          inputValue: exportValue.toString(),
          isCalculatored: true,
          calculator: updateCaculator,
        };
      }
    default:
      return {
        ...state,
      };
  }
};

export default calculator;
