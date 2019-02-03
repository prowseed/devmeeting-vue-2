<template>
  <div class="home">
    <!--7/ 1. Our AppForm keeps interface similar to native form and has input as a child -->
    <AppForm @submit="onSubmit()">
      <!--4/ 3. The input is actually part of parent(Home) DOM passed to a child(AppForm) -->
      <input
        v-model="form.username"
        type="text"
      >
    </AppForm>
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
    //3 2. At the end, after submit we log form data
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>
