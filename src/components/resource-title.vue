<template>
  <div>
    <v-container>
      <v-row align="start" justify="space-between">
        <div class="display-2 cyan lighten-4">{{ getTitle }}</div>
        <v-btn @click.stop="showDialog = true" slot="activator">
          Modify title
        </v-btn>
      </v-row>
    </v-container>
    <v-dialog v-model="showDialog" max-width="400">
      <v-card>
        <v-card-title>
          Modify resource's title
        </v-card-title>
        <v-card-text>
            <v-text-field v-model="newTitleInput" label="New Title" required/>
            <v-card-actions>
                <v-btn @click.prevent="cancelDialog">
                    Cancel
                </v-btn>
                <v-btn @click.prevent="setTitleDialog" :loading="showLoading">
                    Modify
                </v-btn>
            </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    data() {
        return {
            showDialog: false,
            newTitleInput: "",
            showLoading: false
        }
    },
    computed: {
        getTitle: function() {
            return this.$store.getters.getTitle
        }
    },
    methods: {
        setTitleDialog(newTitle) {
            this.showLoading = true
            this.$store.dispatch('changeTitle', {newTitle: this.newTitleInput})
            .then(() => {
                this.showDialog = false
                this.showLoading = false
            })
            .catch(() => {
                console.log('error', "ERROR!!!")
            })
        },
        cancelDialog() {
            this.newTitleInput = this.getTitle
            this.showDialog = false
        }
    },
    created: function() {
        this.newTitleInput = this.getTitle
    }
}
</script>

<style scoped>
</style>