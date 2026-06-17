<script lang="ts" setup>
import { computed, ref } from 'vue'

type User = {
  id: string
  name: string
  email: string
}

const title = ref('Users')
const users = ref<User[]>([])

await new Promise((resolve) => setTimeout(resolve, 1000))
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const usersData = await response.json()
users.value = usersData

const titleAllCaps = computed(() => {
  return title.value.toUpperCase()
})

const changeTitle = () => {
  title.value = 'Title Updated'
}
</script>

<template>
  <h1>{{ title }}</h1>
  <h3>{{ titleAllCaps }}</h3>
  <button @click="changeTitle">Change title</button>
  <ul>
    <li v-for="user in users" :key="user.id">
      <p>{{ user.name }}: {{ user.email }}</p>
    </li>
  </ul>
</template>
