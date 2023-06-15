<template>
  <v-card>
    <v-toolbar color="primary" >
    
    
      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <Cart/>
      </template>
    </v-toolbar>
    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card v-if="item === 'Entrees'" flat>
          <Entrees />
        </v-card>
        <v-card v-else-if="item === 'Plats'" flat>
          <Plats />
        </v-card>
        <v-card v-else flat>
          <Desserts />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import Entrees from "../components/Entrees.vue";
import Plats from "../components/Plats.vue";
import Desserts from "../components/Desserts.vue";
import Card from "./global/Card.vue";
import Cart from "./global/Cart.vue";
export default {
  data() {
    return {
      tab: null,
      items: ["Entrees", "Plats", "Desserts"],
    };
  },
  components: { Entrees, Plats, Desserts, Card, Cart },
};
</script>