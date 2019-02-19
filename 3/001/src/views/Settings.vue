<template>
  <div class="settings">
    <!--1/ 11. Value is now available in the same way as component state -->
    <span> Title: {{ settings && settings.title }}</span>
    <form @submit.prevent="onSubmit()">
      <input
        v-model="newTitle"
        type="text"
      >
      <button
        class="settings__button"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
//1/ 9. To simplify our store assignments we will use mapers from VueX
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    //1/ 10. Assign getter
    ...mapGetters('settings', ['settings']),
  },
  created() {
    this.getSettings();
  },
  methods: {
    //1/ 12. Let's assign actions
    ...mapActions('settings', ['getSettings']),
    onSubmit() {
      //1/ 13. Remember, you can always perform interactions(actions/mutations/getters) directly on $store
      this.$store.dispatch('settings/updateSettings', { ...this.settings, title: this.newTitle });
    },
  },
};
</script>
<style lang="scss" scoped>
.settings {
  &__button {
    display: block;
    margin: 10px auto;
  }
}
</style>
