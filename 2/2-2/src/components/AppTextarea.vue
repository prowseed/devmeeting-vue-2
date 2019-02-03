<template>
  <!--6/ 9. Let's sum it up and bind to textarea native HTML element! -->
  <textarea
    :value="value"
    :rows="rows"
    v-bind="attrs"
    @input="customInput"
    v-on="listeners"
  />
</template>

<script>
const DEFAULT_ROWS = 10;

export default {
  //2/ 3. Set it to false, if you want to override $attrs
  // or prevent from bind attrs to root element
  inheritAttrs: false,
  props: {
    //4/ 7. To let our component work with custom v-model,
    // we have to define value property
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    //3/ 4. We will override rows native html attr by seting default value
    rows() {
      return this.$attrs.rows || DEFAULT_ROWS;
    },
    //4/ 5. Now we have to define new attrs object
    attrs() {
      const { rows, ...attrs } = this.$attrs;
      return attrs;
    },
    //5/ 6. To make sure that every listener works (in eg. @click),
    // we will bind all listeners except input listener
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods: {
    //4/ 8. and customInput which will update value binded as v-model in parent
    // by emiting "input" event from AppTextarea component
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
