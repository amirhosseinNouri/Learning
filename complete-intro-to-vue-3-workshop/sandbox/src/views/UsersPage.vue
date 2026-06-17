<script lang="ts" setup>
import type { User } from '@/types/user'
import { computed, ref, onMounted } from 'vue'
import UserInfo from '@/components/UserInfo.vue'

const title = ref('Users')
const users = ref<User[]>([])

const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await response.json()
  users.value = usersData
}

const titleAllCaps = computed(() => {
  return title.value.toUpperCase()
})

const changeTitle = () => {
  title.value = 'Title Updated'
}

onMounted(() => {
  fetchUser()
})
</script>

<template>
  <h1>{{ title }}</h1>
  <h3>{{ titleAllCaps }}</h3>
  <button @click="changeTitle">Change title</button>
  <ul>
    <li v-for="user in users" :key="user.id">
      <UserInfo :name="user.name" :email="user.email" :id="user.id" />
    </li>
  </ul>
</template>
