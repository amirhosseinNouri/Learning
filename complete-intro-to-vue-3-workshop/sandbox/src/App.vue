<script lang="ts">
import HomePage from './components/HomePage.vue'
import UsersPage from './components/UsersPage.vue'
export default {
  components: {
    HomePage,
    UsersPage,
  },
  data: () => {
    return {
      currentPage: 'Users',
    }
  },
  methods: {
    showHomePage() {
      this.currentPage = 'Home'
    },
    showUsersPage() {
      this.currentPage = 'Users'
    },
  },
  computed: {
    pageName() {
      return this.currentPage + 'Page'
    },
  },
}
</script>

<template>
  <header>
    <a @click.prevent="showHomePage" href="/">Home</a>
    <br />
    <a @click.prevent="showUsersPage" href="/users">Users</a>
  </header>

  <Suspense>
    <component :is="pageName" />
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<style scoped></style>
