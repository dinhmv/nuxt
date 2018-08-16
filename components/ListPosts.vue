<template>
  <div class="list-posts">
    <b-card v-for="post in posts" :key="post.id" tag="article" class="post mb-3">
      <nuxt-link :to="'/'+post.slug" class="d-block text-dark">
        <h3 class="card-title" v-html="post.title.rendered"></h3>
        <div v-if="post.featured_media_url" class="post-thumbnail">
          <b-card-img :src="post.featured_media_url"></b-card-img>
        </div>
        <div class="card-text post-excerpt" v-html="post.excerpt.rendered"></div>
      </nuxt-link>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    posts: Array
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
  .list-posts {
    .post {

    }
  }
  .post-thumbnail {
    position: relative;
    overflow: hidden;
    margin-bottom: .5em;
    &:after {
      width: 100%;
      padding-bottom: 50%;
      content: '';
      display: block;
    }
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%);
      -webkit-backface-visibility: hidden;
      -webkit-transition: opacity .2s;
      transition: opacity .2s;
    }
  }
</style>