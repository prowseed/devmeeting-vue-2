<template>
  <div class="home">
    <!--6/ 1. Our AppForm keeps interface similar to native form and has input as a child -->
    <AppForm @submit="onSubmit()">
      <!--4/ 2. The input is actually part of parent(Home) DOM passed to a child(AppForm) -->
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
    //3 3. At the end, after submit we will log form data
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>
