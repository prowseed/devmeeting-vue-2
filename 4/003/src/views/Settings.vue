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
import { mapGetters, mapActions } from 'vuex';
import { GET_SETTINGS, UPDATE_SETTINGS } from '@/store/actions.types';
import { SETTINGS_MODULE } from '@/store/modules.types';

export default {
  data: () => ({
    newTitle: '',
  }),
  computed: {
    //3/ 6. Bind getters
    ...mapGetters(SETTINGS_MODULE, [
      'settings',
    ]),
  },
  created() {
    this.getSettings();
  },
  methods: {
    //3/ 7. Bind actions
    ...mapActions(SETTINGS_MODULE, {
      getSettings: GET_SETTINGS,
    }),
    onSubmit() {
      //1/ 8. But it's more common to use $store.dispatch notation
      this.$store.dispatch(SETTINGS_MODULE + UPDATE_SETTINGS, { ...this.settings, title: this.newTitle });
    },
  },
};
</script>
