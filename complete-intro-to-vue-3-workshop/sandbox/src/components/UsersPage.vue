<script lang="ts">
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      this.users = users
    },
  },
  created() {
    this.fetchUsers()
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
