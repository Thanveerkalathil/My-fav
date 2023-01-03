export function userReducer(state = "welcom", action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

      default:
        return state;
  }
}
