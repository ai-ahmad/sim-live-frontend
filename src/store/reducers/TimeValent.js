const initialState = {
  TimeBalance: 10  // Initial balance
};

const TimeValentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BALANCE":
      return {
        ...state,
        TimeBalance: action.payload  // Assuming the action sends the balance in payload
      };
    default:
      return state;
  }
};

export default TimeValentReducer;
