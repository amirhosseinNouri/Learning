<script lang="ts">
import Counter from './components/BasicCounter.vue'
import NumberList from './components/NumberList.vue'
import UserCard from './components/UserCard.vue'
import BaseButton from './components/BaseButton.vue'
export default {
  components: {
    Counter,
    NumberList,
    UserCard,
    BaseButton,
  },
  data: () => ({
    numbers: [
      {
        name: 1,
        id: '6a887cd2-f0bf-4321-b192-92016f82a883',
        list: [1, 2, 3],
      },
      {
        name: 2,
        id: '8d14d90b-2d47-473e-8293-d5c324111d0d',
        list: [1, 2, 3],
      },
      {
        name: 3,
        id: 'cd806d65-2309-4625-9104-dcd636cd79b5',
        list: [1, 2, 3],
      },
      {
        name: 4,
        id: '00c939cd-fbf4-46d0-8e61-0bc2ce8a5332',
        list: [1, 2, 3],
      },
      {
        name: 5,
        id: '295a8170-59c1-4462-9de1-3c9cd41cedab',
        list: [1, 2, 3],
      },
    ],
    user: {
      name: 'John Doe',
      email: 'john@example.com',
    },

    users: [],
  }),
  methods: {
    handleChangeName() {
      this.user.name = 'Jane Doeeeeee'
    },
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
  <pre>{{ users }}</pre>
  <BaseButton> ✋🏿 Hi </BaseButton>
  <BaseButton></BaseButton>
  <UserCard :user="user" @change-name="handleChangeName" />
  <Counter />
  <NumberList :numbers="numbers" />
</template>

<style scoped></style>
