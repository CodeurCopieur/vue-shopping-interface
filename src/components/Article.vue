<template lang="pug">

      article.card(:id="product.titre")
        img(:src="product.img", :alt="product.titre").card__img
        .card__data
          h1.card__title {{ product.titre }}
          span.card__price {{ product.price }}€
          p.card__txt {{ product.description }}
          .wrapper__btns
            a(href="#").card__like
              input(type="checkbox", name="checkHeart", :id="product.id", :value="product.id" @click="likeProduct(product.id)")
              label(:for="product.id")
                i.fas.fa-heart
            a(href="#").card__buy 
              i.fas.fa-shopping-cart
            

</template>

<script>
 export default {
   name: 'Article',
   props: {
    product: [String, Number]
  },
   data: () => {
     return {}
   },
   methods: {
     likeProduct(idproduct) {
       this.$emit('productLiked', idproduct)
     }
   }
  }
</script>

<style lang="scss" >
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
</style>