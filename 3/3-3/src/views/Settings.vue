<template>
  <div>
    <span> Title: {{ settings && settings.title }}</span>
    <form @submit.prevent="onSubmit()">
      <input
        v-model="newTitle"
        type="text"
      >
      <input
        type="submit"
        value="Submit"
      >
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { SETTINGS_MODULE } from '@/store/modules.types';
import { SETTINGS } from '@/store/getters.types';
import { GET_SETTINGS, UPDATE_SETTINGS } from '@/store/actions.types';

const {
  mapGetters: mapSettingsGetters,
  mapActions: mapSettingsActions,
} = createNamespacedHelpers(SETTINGS_MODULE);

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    ...mapSettingsGetters({
      settings: SETTINGS,
    }),
  },
  created() {
    this.getSettings();
  },
  methods: {
    ...mapSettingsActions({
      getSettings: GET_SETTINGS,
    }),
    onSubmit() {
      this.$store.dispatch(SETTINGS_MODULE + UPDATE_SETTINGS, { ...this.settings, title: this.newTitle });
    },
  },
};
</script>
