export const SET_MODAL = "SET_MODAL";

const initialState = {
  modalActive: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SET_MODAL) {
    return {
      ...state,
      modalActive: payload
    };
  } else return state;
};

export const setModal = bool => {
  return {
    type: SET_MODAL,
    payload: bool
  };
};
