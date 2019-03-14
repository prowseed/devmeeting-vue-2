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
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    ...mapGetters('settings', ['settings']),
  },
  created() {
    this.getSettings();
  },
  methods: {
    ...mapActions('settings', ['getSettings']),
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
