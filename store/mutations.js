export default {
  // current page
  SET_CURRENT_PAGE( state, page ) {
    state.pagination.page = page
  },
  SET_PER_PAGE(state, per_page) {
    state.pagination.per_page = per_page
  },
  SET_TOTAL_PAGES(state, total_pages) {
    state.pagination.total_pages = total_pages
  },
  SET_POSTS (state, posts) {
    try {
      state.posts = posts.filter(post => {
        post.excerpt.rendered = post.excerpt.rendered.replace(/<p\s+class="link-more">(.*?)<\/p>/gim, '').replace(/<\/?p>/gim, '');
        if(!post.featured_media_url) {
          var source = /<img.*src=['"](.*?)['"]/g.exec(post.content.rendered);
          if(source) {
            post.featured_media_url = source[1];
          }
        }
        return post;
      });
    } catch(e) {
      console(e);
    }
  },
  SET_POST (state, post) {
    var regex = new RegExp('\\[(\\[?)(.*?)(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)\\[\\/\\2\\])?)(\\]?)', 'gmi'),
        match;
    post.meta_fields = new Object();
    while (match = regex.exec(post.content.rendered)) {
      if(match[2] == 'author') {
        post.meta_fields[match[2]] = match[5].split('::');
      } else if(match[2] == 'comments') {
        try {
          post.meta_fields[match[2]] = JSON.parse(decodeURIComponent(match[5]));
          state.pagination.total_pages = Math.ceil(post.meta_fields[match[2]].length/state.pagination.per_page);
        } catch(e) {
          //console.log(e);
        }
      } else {
        post.meta_fields[match[2]] = match[5];
      }
    }
    var regex_url = new RegExp('(<a.*href\s*=\s*[\'"]+https?:\/\/)+nhipvang.com[\/0-9]*(.*)?[\'"]+>(.*)?<\/a>','gmi');
    
    post.content.rendered = post.content.rendered.replace(regex_url, '<a href="/$2">$3</a>');
    //nhipvang.com
    if(post.comments) {
      post.meta_fields['comments'] = JSON.parse(post.comments);
      state.pagination.total_pages = Math.ceil(post.meta_fields['comments'].length/state.pagination.per_page);
    }
    if(post.author_facebook) {
      post.meta_fields['auhtor'] = post.author_facebook.split('::');
    }
    state.post = post;
  },
  
}