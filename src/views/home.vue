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
        article.card(v-for="product in filteredShoes" :key="product.id" :id="product.titre" :product="product" @productLiked="liked")
          img(:src="product.img", :alt="product.titre").card__img
          .card__data
            h1.card__title {{ product.titre }}
            span.card__price {{ product.price }}€
            p.card__txt {{ product.description }}
            .wrapper__btns
              a(href="#").card__like
                input(type="checkbox", name="checkHeart", :id="product.id", :value="product.id" @click="likeProduct(product.id)"  v-model="likes")
                label(:for="product.id")
                  i.fas.fa-heart
              a(href="#").card__buy 
                i.fas.fa-shopping-cart

      li(v-for="like in likes") {{ like }}
</template>

<script>

 export default {
   
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

/*===== Couleur =====*/
$first-color: #F2A20C;
$white-color: #E9EAEC;
$dark-color: #41b883;//272D40
$dark-color-lighten: #F2F5FF;

/*===== Police et typographie =====*/
$h1-font-size: 1.5rem;
$h2-font-size: 1.25rem;
$normal-font-size: 1rem;
$small-font-size: .875rem;

a {
  text-decoration: none;
}



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
    justify-content: center;
    margin-top: 80px;

    
    .card {
      position: relative;
      width: 320px;
      height: 400px;
      padding: 8rem 2rem 0;
      color: $white-color;
      overflow: hidden;
      cursor: pointer;
      margin: 0px 10px;

      &::before {
        content: '';
        position: absolute;
        overflow: hidden;
        width: 150%;
        height: 70%;
        top: -160%;
        bottom: -20%;
        left: -20%;
        transform: rotate(5deg);
        background-color: $dark-color;
        z-index: -1;
        transition: .5s;
      }

      &::after {
        content: '';
        position: absolute;
        overflow: hidden;
        width: 150%;
        height: 70%;
        bottom: 10%;
        left: -20%;
        transform: rotate(5deg);
        background-color: $dark-color;
        z-index: -1;
        transition: .5s;
      }


      &:hover {
        
        .card__img {
          transform: translate(-1.5rem, -8.5rem) rotate(-20deg);
        }

        .card__data {
          transform: translateY(2.8rem);
          
          .card__title {
            transform: translateX(-2.8rem);
          }

          .card__price {
            transform: translateX(-6.8rem);
          }

          .card__txt, .wrapper__btns a {
            transition-delay: .2s;
            opacity: 1;
          }
        }
        
        &::before {
          top: 10%;
        }

        &::after {
          bottom: -200%;
        }
      }

      .card__img{
        position: absolute;
        width: 260px;
        filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, .4));
      }

      .card__data {
        transform: translateY(10.2rem);
        text-align: center;

        

        .card__title {
          font-size: $h1-font-size;
          color: #272D40;
          margin-bottom: .5rem;
        }

        .card__price{
          display: inline-block;
          font-size: $h2-font-size;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }

        .card__txt {
          font-size: $h2-font-size;
          text-align: initial;
          margin-bottom: 1.25rem;
          opacity: 0;
        }
        
        .wrapper__btns {
          display: flex;
          justify-content: space-around;
          a {
            display: block;
            width: max-content;
            padding: 1.125rem 2rem;
            color: #272D40;
            border-radius: .5rem;
            font-weight: 600;
            transition: .2s;
            opacity: 0;
            font-size: 2rem;
            

            input {
              display: none;

              &:checked + label i {
                color: rgb(251, 38, 38);
              }
            }

            label {
              i {
                transition: .5s;
                cursor: pointer;

                &:hover {
                  animation: scaler 0.8s infinite linear;
                }
              }

              .fa-heart:hover {
                color: rgba(251, 38, 38, 0.5);
              }
            }


          }
        }

        
      }
      @media screen and (max-width: 1024px) {

        &::before {
          top: 10%;
        }
        &::after {
            bottom: -200%;
        }
        
        .card__img {
            transform: translate(-1.5rem, -8.5rem) rotate(-20deg);
        }

        .card__data {
          
            transform: translateY(2.8rem);

          .card__title {
            transform: translateX(-2.8rem);
          }

          .card__price {
            transform: translateX(-6.8rem);
          }

          .card__txt, .wrapper__btns a {
            opacity: 1;
          }
        }

          

      }
    }

    @keyframes scaler {
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .card__img, .card__data, .card__title, .card__price, .card__txt {
        transition: .5s;
}
  }

</style>