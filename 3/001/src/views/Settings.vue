<template>
  <div class="settings">
    <!--1/ 12. Value is now available in the same way as component state -->
    <span> Title: {{ settings && settings.title }}</span>
    <form @submit.prevent="onSubmit()">
      <input
        v-model="newTitle"
        type="text"
      >
      <BaseButton
        class="settings__button"
        type="submit"
        variant="text"
      >
        Submit
      </BaseButton>
    </form>
  </div>
</template>

<script>
//1/ 9. To simplify our store assignments we will use createNamespacedHelpers function
import { createNamespacedHelpers } from 'vuex';

//4/ 10. Let's create our mapers!
const {
  mapGetters: mapSettingsGetters,
  mapActions: mapSettingsActions,
} = createNamespacedHelpers('settings');

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    //1/ 11. Assign getter
    ...mapSettingsGetters(['settings']),
  },
  created() {
    this.getSettings();
  },
  methods: {
    //1/ 13. Let's assign actions
    ...mapSettingsActions(['getSettings']),
    onSubmit() {
      //1/ 14. Remember, you can always perform interactions(actions/mutations/getters) directly on $store
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
