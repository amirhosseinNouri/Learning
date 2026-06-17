<script lang="ts">
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['change-name'],
}
</script>

<template>
  <div style="border: 1px solid black; padding: 10px; margin: 10px">
    <h4>{{ user.name }}</h4>
    <p>Email: {{ user.email }}</p>
    <button @click="$emit('change-name')">Change Name</button>
  </div>
</template>
