<template>
    <div class="entrees">
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
              "https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Salade",
            subtitle: "Lunchbox de salade 🥗",
            brand: "PAUL",
          },
          second_product: {
            imageUrl:
              "https://images.pexels.com/photos/4946442/pexels-photo-4946442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Escargots",
            subtitle: "6 eascargots de Bourgogne 🐌",
            brand: "La Lorraine",
          },
          third_product: {
            imageUrl:
              "https://images.pexels.com/photos/3510248/pexels-photo-3510248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Burrata",
            subtitle: "Italiaaaaa 🤌",
            brand: "Mozza & Co",
          },
        },
      };
    },
  };
  </script>
  <style scoped>
  .entrees {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
  }
  .single {
    width: 30%;
  }
  </style>