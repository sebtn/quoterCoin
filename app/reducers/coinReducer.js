export let coinReducer = (state = [] , action) => {
  switch (action.type) {
    case "FETCH_COINS":
      return [
        // ...state, -> will return key error react elem
        ...action.coins // use it because there is no other state(???)
      ]
    default:
      return state
  }
}