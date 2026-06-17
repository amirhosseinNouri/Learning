<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <br />
    <RouterLink to="/users">Users</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped></style>
