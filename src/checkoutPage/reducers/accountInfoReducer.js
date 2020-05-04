const accountInfo = {
  accountInfo: []
};

const accountInfoReducer = (state=accountInfo, action) => {
  console.log('accountInfoReducer', state);
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default accountInfoReducer;