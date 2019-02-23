<template>
  <div id="app">
    <!--6/ 1. Generic, base component with custom two-way v-model binding -->
    <BaseTextarea
      v-model="textValue"
      rows="15"
      @change="logChange"
      @input="logInput"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
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
