<template>
    <div class="plat">
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
              "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Burger",
            subtitle: "Burger au boeuf 🍔",
            brand: "Big Burger",
          },
          second_product: {
            imageUrl:
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Bol végétal",
            subtitle: "veggie bowl 🥗",
            brand: "Veggissime",
          },
          third_product: {
            imageUrl:
              "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Pates qu ont l'air bonnes",
            subtitle: "bon choix 👌",
            brand: "pasta la vista",
          },
        },
      };
    },
  };
  </script>
  <style scoped>
  .plat {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
  }
  .single {
    width: 30%;
  }
  </style>