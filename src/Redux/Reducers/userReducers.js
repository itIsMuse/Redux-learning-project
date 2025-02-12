const initialState = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;