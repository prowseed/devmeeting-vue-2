<template>
  <div id="app">
    <!--8/ 1. Generic, base component with custom two-way v-model binding -->
    <BaseTextarea
      v-model="textValue"
      class="example-textarea"
      rows="5"
      cols="25"
      label="Message"
      @change="logChange()"
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
  },
};
</script>
