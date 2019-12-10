<template>
  <div class="display-1 amber lighten-4">
    <ul class="pl-0">
      <li v-for=" contact in getContacts" :key="contact.email">
        <div >
          <div class="display-1 d-inline">
            {{ contact.name }}
          </div>
          <div class="subtitle-1 d-inline mb-1">
            {{ contact.organisation}}
          </div>
        </div>
        <div class="subtitle-2">
          Email: {{ contact.email }}
        </div>
      </li>
    </ul>
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

<style scoped>
li {
  list-style-type: none;
}
</style>