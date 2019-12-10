<template>
  <v-card id="main-page" class="mx-auto pa-5 pink lighten-5" max-width="1200" elevation="2">
    <resource-title />
    <div class="pl-2">
      <resource-description />
      <resource-contacts />
    </div>
  </v-card>

</template>

<script>
import resourceTitle from './resource-title.vue'
import resourceDescription from './resource-description.vue'
import resourceContacts from './resource-contacts.vue'

export default {
    components: {
        'resource-title': resourceTitle,
        'resource-description': resourceDescription,
        'resource-contacts': resourceContacts
    },
    data() {
        return {}
    }
}
</script>

<style>
    * {
        box-sizing: border-box;
    }

    /* Select all children elements except first */
    #main-page > *:not(:first-child)  {
        padding-top: 1rem;
    }

    #main-page {
        /* border-bottom-right-radius: 40px; */
    }
</style>
