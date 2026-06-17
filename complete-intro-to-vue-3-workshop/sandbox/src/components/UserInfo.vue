<script lang="ts" setup>
import type { User } from '@/types/user'

const props = defineProps<User>()
console.log(props)
</script>

<template>
  <RouterLink :to="`/users/${props.id}`">
    <p>{{ props.name }}: {{ props.email }}</p>
  </RouterLink>
</template>
