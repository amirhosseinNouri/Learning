<script lang="ts">
export default {
  async setup() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await users.json()
    return {
      users: usersData,
    }
  },
}
</script>

<template>
  <h1>Users Page</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <p>{{ user.name }}: {{ user.email }}</p>
    </li>
  </ul>
</template>
