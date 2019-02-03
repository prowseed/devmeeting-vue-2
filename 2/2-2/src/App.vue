<template>
  <div id="app">
    <!--1/ 1. Generic, base component with custom two-way v-model binding -->
    <AppTextarea
      v-model="textValue"
      @change="logChange"
      @input="logInput"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    //1/ 2. Our model is just a simple property
    textValue: '',
  }),
  methods: {
    logChange() {
      console.log('change');
    },
    logInput() {
      console.log('input');
    },
  },
};
</script>
