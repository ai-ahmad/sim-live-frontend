// actions/balanceActions.js
export const increaseBalance = (amount) => {
  return {
    type: 'INCREASE_BALANCE',
    payload: amount,
  };
};
