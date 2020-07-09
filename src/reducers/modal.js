import { OPEN_MODAL, CLOSE_MODAL } from "../actions";

const initialSate = {
  isModalOpen: false,
};

const modal = (state = initialSate, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        isModalOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default modal;
