<script lang="ts" setup>
import { useCountStore } from '@/stores/CountStore'

const countStore = useCountStore()
</script>

<template>
  <h1>{{ countStore.displayTitle }} Counter</h1>
  <h2>Value: {{ countStore.count }}</h2>
  <button @click="countStore.increment">Increment</button>
</template>
