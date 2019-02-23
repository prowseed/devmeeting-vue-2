<template>
  <div class="home">
    <BaseForm @submit="onSubmit()">
      <input
        v-model="form.username"
        type="text"
      >
    </BaseForm>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data: () => ({
    form: {
      username: '',
    },
  }),
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>
