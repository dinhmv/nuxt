<template>
  <b-card :key="post.id" tag="article" class="post single-post mb-3" no-body>
    <b-card-header class="entry-header">
      <h1 class="h2" v-html="post.title.rendered"></h1>
    </b-card-header>
    <b-card-body>
      <div class="entry-content" v-html="post.content.rendered"></div>
    </b-card-body>
    <b-card-footer id="comments">
      <ol v-if="post.meta_fields.comments" class="list-comments list-unstyled">
        <li v-for="(comment, i) in comments_paginate" :key="i" class="media">
          <img :src="'https://i0.wp.com/graph.facebook.com/'+comment.id+'/picture?type=square'" class="mr-2 rounded-circle avatar"/>
          <div class="media-body">
            <div class="comment-body">
              <b class="fn">{{ comment.name }} </b><span class="says"> đã viết:</span> 
              <div class="comment-content" v-html="comment.comment"></div>
              <div class="comment-time"><time>{{ timeFormat(comment.time) }}</time></div>
            </div>
            <ol v-if="comment.replies" :id="'children-'+i" class="list-comments children-comments list-unstyled">
              <li v-for="(reply, k) in comment.replies" :key="i+'-'+k" class="media">
                <img :src="'https://i0.wp.com/graph.facebook.com/'+reply.id+'/picture?type=square'" class="mr-2 rounded-circle avatar"/>
                <div class="media-body">
                  <div class="comment-body">
                    <b class="fn">{{ reply.name }} </b><span class="says"> đã viết:</span> 
                    <div class="comment-content" v-html="reply.comment"></div>
                    <div class="comment-time"><time>{{ timeFormat(reply.time) }}</time></div>
                  </div>
                </div>
              </li>
              <li v-if="comment.replies.length > 3" class="view-more-comment">
                <a :data-id="'#children-'+i" @click="$event.target.parentNode.parentNode.classList.toggle('all-replies')" class="view-more-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 -2 24 24" transform="rotate(180)" fill="#4b4f56">
                    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg> Xem thêm phản hồi
                </a>
              </li>
            </ol>
          </div>
        </li>
        <li v-if="!isLastPage" class="view-more-comment">
          <nuxt-link to="/" event="" @click.native.prevent="setCommentPage($event)" class="view-more-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 -2 24 24" transform="rotate(180)" fill="#4b4f56">
              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg> Xem thêm bình luận
          </nuxt-link>
        </li>
      </ol>
      <div v-else class="fb-comments" :data-href="$route.fullPath" data-numposts="15"></div>
    </b-card-footer>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData ({ app, store, params }) {
    store.commit('SET_CURRENT_PAGE', 1);
    store.commit('SET_PER_PAGE', 15);
    await store.dispatch( 'getPost', params.slug )
  },
  computed: {
    ...mapGetters({
      post: 'getPost',
      comments_paginate: 'getCommentsByPage',
      isLastPage: 'isLastPage',
    }),
  },
  methods: {
    timeFormat(utime = 0) {
      return new Date(utime*1000).toLocaleDateString("vi-Vn", { weekday: 'long', hour12: true, hour: 'numeric', minute: 'numeric'});
    },
    setCommentPage(event) {
      this.$store.commit('SET_CURRENT_PAGE', this.$store.state.pagination.page + 1);
      //history.pushState({},"", event.toElement.href);
    },
  },
  head() {
    return {
      title: this.post.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt.rendered,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title.rendered + ' • Scott Evans'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.excerpt.rendered
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.featured_media_url
        },
      ]
    }
  },
}
</script>
<style lang="scss">
.single-post {
  .entry-header {
    background: transparent;
    border-bottom: none;
    h1 {
      margin-bottom: 0;
    }
  }
  .entry-content {
    img {
      max-width: 100%;
      height: auto
    }
    a img {
      border: 0
    }
    .alignleft {
      float: left;
    }

    .alignright {
      float: right;
    }
    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    blockquote {
      padding: 16px;
      margin: 8px 0 24px 0;
      border-left: 2px solid #87a6bc;
      color: #4f748e;
      background: #e9eff3
    }
    .wp-caption { 
      img {
        display: block;
        margin: 0;
      }
      .wp-caption-dd {
        background: #f3f6f8;
        color: #4f748e;
        font-size: 14px;
        line-height: 1.7;
        padding: 16px;
      }
    }
  }
}
#comments {
  position: relative;
  background-color: #f2f3f5;
  border-top: 1px solid #dddfe2;
  &::before {
    position: absolute;
    content: '';
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    display: inline-block;
    top: -7px;
    border-bottom: 7px solid #dddfe2;
    left: 29px;
  }
  &::after {
    position: absolute;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    display: inline-block;
    top: -6px;
    border-bottom: 6px solid #f2f3f5;
    left: 30px;
  }
  .list-comments {
    li {
      .avatar {
        height: 3em;
        width: 3em;
        border: 1px solid rgba(0, 0, 0, 0.12);
        margin-top: 0.25rem;
      }
    }
    .comment-body {
      min-height: 3rem;
      margin-bottom: 0.5em;
      .comment-time {
        font-size: 70%;
        color: #616770;
      }
      .comment-content {
        display: inline;
        &::after{
          content: '';
          display: block;
          clear: both;
        }
        img {
          max-width: 100%;
          clear: both;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    .fn, .fn a {
      color: #365899;
      font-weight: 600;
    }
    .says {
      display: none;
    }
    .view-more-link {
      color: #365899;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
  }
  
  .children-comments{
    li {
      .avatar {
        font-size: .75em;
      }
      &:not(.view-more-comment):nth-of-type(n+4) {
        display: none;
      }
    }
    &.all-replies li {
      display: flex!important;
      &.view-more-comment {
        display: none!important;
      }
    }
  }
}
</style>

