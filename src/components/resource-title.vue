<template>
<div>
    <h1>{{ getTitle }}</h1>
</div>
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