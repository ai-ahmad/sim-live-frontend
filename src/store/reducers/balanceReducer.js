const initialState = {
    balance: 0  
  };
  
  const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE_BALANCE":
        return {
          ...state,
          balance: state.balance + action.payload
        };
      default:
        return state;
    }
  };
  
  export default balanceReducer;
  