<template>
  <li>
    <strong>Name</strong> {{ item.text }}
    <strong>Date:</strong> {{ formatDate(item.createdAt, 'LLL') }}
  </li>
</template>
<script>
import formatDate from '@/utils/formatDate';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>
