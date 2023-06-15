<template>
  <div class="desserts">
    <Card class="single" v-for="(item, index) in myItemData" :key="index" :item="item" />
  </div>
</template>

<script>
import Card from "../components/global/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      myItemData: {
        first_product: {
          imageUrl:
            "https://images.pexels.com/photos/239325/pexels-photo-239325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Macarons",
          subtitle: "Boite de 6 macarons assortis 🥰",
          brand: "Pierre Hermé",
        },
        second_product: {
          imageUrl:
            "https://images.pexels.com/photos/1282279/pexels-photo-1282279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Tarte aux pomme",
          subtitle: "Part de tarte aux pommes 🍎",
          brand: "PAUL",
        },
        third_product: {
          imageUrl:
            "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Brownie",
          subtitle: "1kg de brownie 🍫",
          brand: "Brownie Factory",
        },
      },
    };
  },
};
</script>
<style scoped>
.desserts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px;
}
.single {
  width: 30%;
}
</style>
