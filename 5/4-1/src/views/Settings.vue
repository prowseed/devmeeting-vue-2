<template>
  <div class="settings">
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
import { createNamespacedHelpers } from 'vuex';

const {
  mapGetters: mapSettingsGetters,
  mapActions: mapSettingsActions,
} = createNamespacedHelpers('settings');

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    ...mapSettingsGetters(['settings']),
  },
  created() {
    this.getSettings();
  },
  methods: {
    ...mapSettingsActions(['getSettings']),
    onSubmit() {
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
