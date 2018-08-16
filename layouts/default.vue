<template>
  <div class="blog" id="blog">
    <TheHeader/>
    <main id="main" role="main">
      <b-container>
        <b-row class="mt-3 mb-5">
          <b-col id="primary" class="content-area"><nuxt/></b-col>
          <b-col id="secondary" lg="4" class="pl-lg-0">
            <TheWidget/>
          </b-col>
          <b-col order-lg="first" lg="1" class="d-none d-lg-block"></b-col>
        </b-row>
      </b-container>
    </main>
    <TheFooter/>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheWidget from '~/components/TheWidget.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    TheWidget,
  },
}
</script>
<style lang="scss">
*:hover, *:focus, *:active {
  outline: none !important;
  box-shadow: none!important;
}
body {
  background-color: #e9ebee;
}
#main {
  margin-top: 5rem;
}
a:hover {
  text-decoration: none;
}

</style>