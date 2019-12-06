<template>
  <v-app>
    <v-content>
      <main-page/>
    </v-content>
  </v-app>
</template>
<script>
import mainPage from './components/main-page.vue'

export default {
  name: 'App',

  components: {
    'main-page': mainPage
  },

  data: () => ({
    //
  })
}
</script>
