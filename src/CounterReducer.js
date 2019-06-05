const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "ADDTen":
      return state + 10;
    case "REMOVE":
      return state - 1;
    case "REMOVETen":
      return state - 10;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
