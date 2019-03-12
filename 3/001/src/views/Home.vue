<template>
  <div class="home">
    <!--7/ 1. Our BaseForm keeps interface similar to native form and has input as a child -->
    <BaseForm @submit="onSubmit()">
      <!--4/ 2. The input is actually part of parent(Home) DOM passed to a child(BaseForm) -->
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
    //3/ 3. At the end, after submit we log form data
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>
