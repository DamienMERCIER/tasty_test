<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> Panier </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <ul>
            <li v-for="item in cartItems" :key="item.name">
              {{ item.name }} - Quantité : {{ item.quantity }}
              <v-btn color="primary" @click="decrementQuantity(item)">-</v-btn>
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn block @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "@/state/state_cart";
export default {
  setup() {
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.items);

    function decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
         cartStore.removeItem(item.name);
      }
    }
    return {
      cartItems,
      decrementQuantity,
    };
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
