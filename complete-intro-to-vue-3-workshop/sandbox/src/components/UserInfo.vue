<script lang="ts" setup>
import type { User } from '@/types/user'

const props = defineProps<User>()
</script>

<template>
  <p>{{ props.name }}: {{ props.email }}</p>
</template>
