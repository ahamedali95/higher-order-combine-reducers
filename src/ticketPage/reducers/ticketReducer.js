const ticket = (() => {
  return {
    tickets: []
  };
})();

const ticketReducer = (state=ticket, action) => {
  console.log('ticket', state);
  switch (action.type) {
    case 'SET_TICKET':
      return { ...state, tickets: action.payload };
    default:
      return state;
  }
};

export default ticketReducer;