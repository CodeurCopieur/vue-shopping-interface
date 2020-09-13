<template lang="pug">
  main#home
    .wrapper
      .wrapper__title
        h3.title Article

      //Search display

      .form__group.field
        input(type="text", v-model="searchVal" class="form__input")
        label Search Shoes
        span
      
      //Cards display
      .container__article
        Article(v-for="product in products" :key="product.id" :product="product")
</template>

<script>

import Article from '../components/Article'

 export default {
   components : {
     Article
   },
   data: () => {
     return {
       products: [
         {
           id:1,
           titre:'Nike Air Jordan',
           description: 'Nike Air Jordan Footwear basketball sneakers.',
           price: 99,
           img: require('../assets/img/img3.png')
         },
         {
           id:2,
           titre:'Nike Air Jordan',
           description: 'Nike Air Jordan Footwear basketball sneakers.',
           price: 40,
           img:require('../assets/img/img2.png')
         },
         {
           id:3,
           titre:'Nike Air Jordan',
           description: 'Nike Air Jordan Footwear basketball sneakers.',
           price: 60,
           img:require('../assets/img/img1.png')
         }         
         ],
         searchVal: ''
     }
   },
   computed: {

   },
   methods: {
     
   }
  }
</script>

<style lang="scss" scoped>

  .container__article {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

  }

</style>