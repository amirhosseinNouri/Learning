<script lang="ts">
export default {
  props: {
    text: String,
    icon: String,
  },
}
</script>

<template>
  <button><slot>Submit</slot></button>
</template>
