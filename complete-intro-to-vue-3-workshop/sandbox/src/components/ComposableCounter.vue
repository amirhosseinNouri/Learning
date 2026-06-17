<script setup lang="ts">
import { counter, increment } from '@/composable/countStore'
</script>

<template>
  <h5>Value: {{ counter }}</h5>
  <button @click="increment">Increment</button>
</template>
