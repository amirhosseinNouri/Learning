<script lang="ts">
import { computed, ref } from 'vue'

export default {
  async setup() {
    const title = ref('Users')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await users.json()

    const titleAllCaps = computed(() => {
      return title.value.toUpperCase()
    })

    return {
      users: usersData,
      title,
      titleAllCaps,
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Title Updated'
    },
  },
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
