<template>

  <div class="display-1 teal lighten-4">
    {{ getDescription }}
  </div>
</template>
<script>
export default {
    computed: {
        getDescription: function() {
            return this.$store.getters.getDescription
        }
    }
}
</script>

<style scoped>
</style>