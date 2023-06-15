import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(itemName) {
        const existingItem = this.items.find((item) => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
        this.items.push({ name: itemName, quantity: 1 });
      }
    },
    removeItem(itemName) {
      const existingItem = this.items.find((item) => item.name === itemName);
      if (existingItem && existingItem.quantity === 1) {
        this.items = this.items.filter((item) => item.name !== itemName);
      } else if (existingItem) {
        existingItem.quantity -= 1;
      }
    }
  },
});