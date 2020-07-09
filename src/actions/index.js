export const GET_NUM = "GET_NUM";
export const GET_PERCENT = "GET_PERCENT";
export const PRESS_AC = "PRESS_AC";
export const SET_SIGN = "SET_SIGN";
export const GET_OPERATOR = "GET_OPERATOR";
export const PRESS_CALCULATE = "PRESS_CALCULATE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const getNum = (num) => {
  return {
    type: GET_NUM,
    num,
  };
};
export const pressAC = () => {
  return {
    type: PRESS_AC,
  };
};
export const getPercent = () => {
  return {
    type: GET_PERCENT,
  };
};
export const setSign = (num) => {
  return {
    type: SET_SIGN,
    num,
  };
};
export const getOperator = (operator) => {
  return {
    type: GET_OPERATOR,
    operator,
  };
};
export const pressCalculate = () => {
  return {
    type: PRESS_CALCULATE,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
