import { defineStore } from 'pinia'

export const store = defineStore({
  id: 'store',
  state: () => {
    return {
      globalLoading : false
    }
  },
  actions: {
    setGlobalLoading(value) {
      this.globalLoading = value;
    },
  },
  getters: {
    getGlobalLoading: state => state.globalLoading,
  },
});