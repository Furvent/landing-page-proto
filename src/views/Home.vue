<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <main-page/>
  </div>
</template>
<script>
// @ is an alias to /src
import mainPage from '@/components/main-page.vue'

export default {
  name: 'home',
  components: {
    mainPage
  }
}
</script>
