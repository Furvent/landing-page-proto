<template>
  <div>
    <v-card>
      <h1>{{ getContacts }}</h1>
    </v-card>
  </div>
</template>
<script>
export default {
    computed: {
        getContacts: function() {
            return this.$store.getters.getContacts
        }
    }
}
</script>