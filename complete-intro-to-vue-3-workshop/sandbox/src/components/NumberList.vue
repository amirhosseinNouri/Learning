<script lang="ts">
export default {
  props: {
    numbers: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <ul v-for="(item, index) in numbers">
    <li>
      <h3>List {{ item.name }}</h3>
      <ul>
        <li v-for="number in item.list" :key="`number-${index}`">{{ number }}</li>
      </ul>
    </li>
  </ul>
</template>
