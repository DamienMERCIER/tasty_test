<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="item.imageUrl" cover>
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">
      {{ item.subtitle }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ item.brand }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="addToCart" color="blue"> ajouter au panier </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { useCartStore } from "../../state/state_cart.js";
export default {
  props: ["item"],
  methods: {
    addToCart() {
      useCartStore().addItem(this.item.title);
    },
  },
};
</script>
