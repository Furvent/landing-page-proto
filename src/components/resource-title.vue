<template>
  <v-container>
    <v-row align="start" justify="space-between">
      <div class="display-2 cyan lighten-4">{{ getTitle }}</div>
      <v-btn>
        Modify title
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
    computed: {
        getTitle: function() {
            return this.$store.getters.getTitle
        }
    }
}
</script>

<style scoped>
</style>