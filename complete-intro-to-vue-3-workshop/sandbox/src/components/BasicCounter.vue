<script>
export default {
  data: () => ({
    count: 0,
    title: 'Counter',
    incrementAmount: 1,
  }),
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Long'
      }

      return 'Standard'
    },
  },
  methods: {
    incrementCount() {
      this.count += this.incrementAmount
    },
  },
}
</script>

<template>
  <h1>{{ displayTitle }} Counter</h1>
  <h2>Value: {{ count }}</h2>
  <button @click="incrementCount">Increment</button>

  By
  <input type="number" v-model="incrementAmount" />
</template>
