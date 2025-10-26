import { defineStore } from 'pinia'
import beersData from '@/assets/beers_data.json'

export const useBeersStore = defineStore('beers', {
  state: () => ({
    beers: beersData.beers,
    selectedBeer: null
  }),
  actions: {
    selectBeer(id) {
      this.selectedBeer = this.beers.find(b => b.id === id)
    }
  }
})
