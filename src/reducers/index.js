const reducer = (
  state = { user: { name: "", repos: [] }, loading: false },
  action
) => {
  switch (action.type) {
    case "SET_MODE":
      return {...state, mode: action.payload}
    case "TOGGLE_MODE":
      const newState = state;
      newState.mode = !newState.mode;
      localStorage.setItem("color-mode",  newState.mode ? 'light' : 'dark');
      return newState;
    case "LOADING":
      return { ...state, user: { name: action.payload, repos: [] }, loading: true };
    case "LOAD_RESULT":
      return {
        ...state,
        user: { repos: action.payload.result, name: action.payload.searchTerm },
        loading: false,
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SELECT_REPO":
      return {...state, repo: state.user.repos.find(item=> item.name === action.payload)}
    default:
      return state;
  }
};

export default reducer;
