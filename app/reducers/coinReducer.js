export let coinReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COINS":
      return { ...state, coins: action.payload }
    default:
      return state
  }
}