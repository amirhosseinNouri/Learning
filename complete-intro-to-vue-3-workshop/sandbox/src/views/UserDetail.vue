<script lang="ts" setup>
import { fetchUser } from '@/lib/user'
import type { User } from '@/types/user'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const user = ref<User>()

onMounted(async () => {
  user.value = await fetchUser(route.params.id as string)
})
</script>

<template>
  <h1>User Detail {{ route.params.id }}</h1>
  <pre>{{ user }}</pre>
</template>
