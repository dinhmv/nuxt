import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default () => {
  return new Vuex.Store({
    strict: true,
    state: {
      pagination: {
        page: 1,
        per_page: 15,
        total_pages: 0,
      },
      posts: [],
      pages: [],
      post: null,
      page: null,
    },
    actions,
    mutations,
    getters,
  })
}