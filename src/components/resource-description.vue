<template>
  <div>
    <h1>{{ getDescription }}</h1>
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