export default {
  async getPosts( { commit, state }, params ) {
    if(!params.per_page) {
      params['per_page'] = state.pagination.per_page;
    }
    const posts = await this.$axios.get('posts', { params: params})
    commit('SET_POSTS', posts.data)
    commit('SET_TOTAL_PAGES', parseInt(posts.headers['x-wp-totalpages']))
  },
  async getPost( { commit, state }, slug ) {
    const posts = await this.$axios.$get('posts', { params: {slug: slug}})
    commit('SET_POST', posts[0])
  }
}