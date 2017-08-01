export let coinReducer = (state = [] , action) => {
  switch (action.type) {
    case "FETCH_COINS":
      return [
        // ...state,
        ...action.coins
        // ...action.payload.data
      ]
    default:
      return state
  }
}