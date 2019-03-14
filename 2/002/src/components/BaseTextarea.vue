<template>
  <!--11/ 3. The root item is label -->
  <label>
    {{ label }}
    <!--7/ 10. Let's bind everything to native HTML element! -->
    <textarea
      :value="value"
      :rows="rows"
      v-bind="$attrs"
      @input="customInput"
      v-on="listeners"
    />
  </label>
</template>

<script>
const DEFAULT_ROWS = 20;

export default {
  //2/ 4. Set it to false, if you want to prevent from $attrs binding to root element
  inheritAttrs: false,
  props: {
    //5/ 9. To get v-model value from parent,
    // we have to define value property
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Default label',
    },
    //4/ 5. You can set default rows value by defining props
    // rows is now excluded from $attrs
    rows: {
      type: [String, Number],
      default: DEFAULT_ROWS,
    },
  },
  computed: {
    //5/ 7. To make sure that every listener works (e.g. @click, @focus),
    // we will bind all listeners except input listener
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  mounted() {
    //1/ 6. We will log our $attrs to check if it works
    console.log('$attrs:', this.$attrs);
  },
  methods: {
    //3/ 8. Input is explicitly defined to properly update value binded as v-model
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
