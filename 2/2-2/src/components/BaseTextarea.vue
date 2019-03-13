<template>
  <!--7/ 8. Let's bind everything to native HTML element! -->
  <textarea
    :value="value"
    :rows="rows"
    v-bind="$attrs"
    @input="customInput"
    v-on="listeners"
  />
</template>

<script>
const DEFAULT_ROWS = 20;

export default {
  //2/ 3. Set it to false, if you want to override $attrs
  // or prevent from attrs binding to root element
  inheritAttrs: false,
  props: {
    //5/ 7. To get v-model value from parent,
    // we have to define value property
    value: {
      type: String,
      default: '',
    },
    //4/ 4. You can set default rows value by defining props
    // rows is now excluded from $attrs
    rows: {
      type: [String, Number],
      default: DEFAULT_ROWS,
    },
  },
  computed: {
    //5/ 5. To make sure that every listener works (e.g. @click, @focus),
    // we will bind all listeners except input listener
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  mounted() {
    console.log('$attrs:', this.$attrs);
  },
  methods: {
    //3/ 6. Input is explicitly defined to properly update value binded as v-model
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
