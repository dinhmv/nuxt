<template>
  <list-posts :posts="posts"/>
</template>

<script>
import { mapGetters } from 'vuex'
import ListPosts from '~/components/ListPosts.vue'

export default {
  async asyncData ({ app, store, params }) {
    //store.commit( 'currentPage', parseInt( params.id || 1 ) )
    //let articles = await app.$axios.$get('posts')
    //console.log(articles);
    await store.dispatch( 'getPosts', { page: parseInt( params.id || 1 ) } )
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
    })
  },
  components: {
    ListPosts,
  }
}
</script>

