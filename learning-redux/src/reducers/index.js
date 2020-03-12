export const initialState = {
  number: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: action.payload + 1 };
    case "DECREMENT":
      return { ...state, number: action.payload - 1 };
    default:
      return state;
  }
};
