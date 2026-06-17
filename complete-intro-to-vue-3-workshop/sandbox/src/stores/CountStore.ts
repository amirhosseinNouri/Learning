import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
    incrementAmount: 10,
  }),
  getters: {
    displayTitle(state) {
      if (state.count > 20) {
        return 'Long'
      }

      return 'Standard'
    },
  },
  actions: {
    increment() {
      this.count += this.incrementAmount
    },
  },
})
