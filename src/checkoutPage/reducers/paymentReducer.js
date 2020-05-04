const payment = (() => {
  return {
    payment: []
  };
})();

const paymentReducer = (state=payment, action) => {
  console.log('payment', state);
  switch (action.type) {
    case 'SET_TICKET':
      return { ...state, payment: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;