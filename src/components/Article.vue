<template lang="pug">

      article.card(:id="product.titre")
        img(:src="product.img", :alt="product.titre").card__img
        .card__data
          h1.card__title {{ product.titre }}
          span.card__price ${{ product.price }}
          p.card__txt {{ product.description }}
          a(href="#").card__buy buy
          a(href="#").card__like

</template>

<script>
 export default {
   name: 'Article',
   props: {
    product: [String, Number]
  },
   data: () => {
     return {}
   }
  }
</script>

<style lang="scss" >
/*===== Couleur =====*/
$first-color: #F2A20C;
$white-color: #E9EAEC;
$dark-color: #272D40;
$dark-color-lighten: #F2F5FF;

/*===== Police et typographie =====*/
$h1-font-size: 1.5rem;
$h2-font-size: 1.25rem;
$normal-font-size: 1rem;
$small-font-size: .875rem;

.card {
  width: 320px;
  height: 400px;
  background-color: $dark-color;
  border-radius: 1rem;
  padding: 4rem 2rem 0;
  color: $white-color;
  overflow-y: hidden;

  .card__img{
    position: absolute;
    width: 260px;
    filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, .4));
  }

  .card__data {
    transform: translateY(13.2rem);
    text-align: center;

    .card__title {
      font-size: $h1-font-size;
      color: $first-color;
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
    .card__buy {
      display: block;
      width: max-content;
      padding: 1.125rem 2rem;
      background: #F2A20C;
      color: #E9EAEC;
      border-radius: .5rem;
      font-weight: 600;
      transition: .2s;
      opacity: 0;
    }
  }
}
</style>