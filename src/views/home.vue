<template lang="pug">
  main#home
    .wrapper
      .wrapper__title
        h3.title Home

      //Search display

      .form.input-effect
        input(type="text", v-model="searchVal" class="form__input")
        label Search
        span.focus-borde

      //Message resultat
      .container
        transition(name="fade" mode="out-in")
          .alert(v-if="searchVal && filteredShoes.length >= 1")
            p {{ filteredShoes.length }} 
              |resultat
              span(v-if="filteredShoes.length >= 2") s
          .alert.alert-danger(v-if="filteredShoes.length == []")
            p Désolé, aucun resultat



      
      //Cards display
      .container__article
        Article(v-for="product in filteredShoes" :key="product.id" :product="product" @productLiked="liked")

      //li(v-for="like in likes") {{ like }}
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
         searchVal: '',
         likes: []
     }
   },
   computed: {
     filteredShoes() {
       return this.products.filter((product) => {
         return product.titre.toLowerCase().includes(this.searchVal.toLowerCase());
       })
     }
   },
   methods: {
     liked(product) {
       this.likes.push(product)
       console.log(this.likes);
     }
   }
  }
</script>

<style lang="scss" scoped>

  .form{
    position: relative;
    margin: 40px auto;
    text-align: center;
    .form__input {
      width: 40%;
      box-sizing: border-box;
      letter-spacing: 1px;
      color: #272D40;
      border: 0;
      padding: 4px 0;
      border-bottom: 1px solid #272D40;
      background-color: transparent;

      &:focus {
        outline: none;

        & ~ label {
          top: -16px;
          font-size: 12px;
          color: #41b883;
          transition: 0.3s;
        }

        & ~ .focus-border::before {
          width: 20%;
          transition: 0.4s;
        }

        & ~ .focus-border::after {
          width: 20%;
          transition: 0.4s;
        }

      }

      & ~ .focus-border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 99;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 100%;
          background-color: #4caf50;
          transition: 0.4s;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 50%;
          width: 0;
          height: 100%;
          background-color: #4caf50;
          transition: 0.4s;
        }
      }
    }

    label {
      position: absolute;
      left: 0;
      width: 100%;
      top: 5px;
      color: #272D40;
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
      text-transform: uppercase;
      font-weight: 700;
    }

  }

  .container {
    position: relative;
    .alert {
      position: absolute;
      top: -50px;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 30%;
      border: 1px solid #41b883;
      background-color: #41b883;
      cursor: pointer;
      color: #fff;
      padding: .25rem 1.25rem;
      border-radius: .25rem;
      text-align: center;
      margin: 20px auto;
      transition: .5s;

      &:hover {
        color: #41b883;
        background-color: #fff;
      }
    }
  }
  

  .container__article {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 80px;
  }

</style>