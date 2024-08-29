export const getBalance = amount => {
    return {
      type: 'GET_BALANCE',
      payload: amount
    };
  };
  