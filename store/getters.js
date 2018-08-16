export default {
  // get all posts
  getPosts: (state) => {
    return state.posts
  },
  getPost: (state) => {
    return state.post
  },
  getCommentsByPage: (state) => {
    let page = state.pagination.page;
    if(page >= state.pagination.total_pages) {
      page = state.pagination.total_pages;
      state.pagination.page = page;
    }
    return state.post.meta_fields.comments.slice(0, (page -1)*state.pagination.per_page + state.pagination.per_page);
  },
  isLastPage: (state) => {
    return state.pagination.page >= state.pagination.total_pages;
  },
}