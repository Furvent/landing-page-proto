<template>
<div>
    <resource-title/>
    <resource-description/>
    <resource-contacts/>
</div>
    
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

<style scoped>
*{
    box-sizing: border-box;
    background-color: rgb(172, 133, 179);
}
</style>
