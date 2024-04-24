import { createStore } from 'vuex'

export default createStore({
  state: {
    reviews: []
  },
  mutations: {
    addReview(state, review) {
      state.reviews.push(review)
    }
  }
})
