<template lang="pug">
  #app
    nav
      .nav-container
        #logo
          router-link(to="/")
            img(src="./assets/logo.png", alt="Vue logo")

        ul#container-list
          li 
            router-link(to="/user-settings")
              i.fas.fa-user
          li 
            router-link(to="/wish-list")
              i.fas.fa-heart
          li 
            router-link(to="/shopping-cart")
              i.fas.fa-shopping-cart

    transition(name="fade" mode="out-in")
      router-view

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "assets/scss/index.scss";

body {

  margin: 0;

  #app {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    nav {
      padding: 0.8rem 2.4rem;
      background: rgba(255, 255, 255, 0.97);
      z-index: 2;
      box-shadow: 0 2px 4px -3px #41b883;
      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1070px;
        margin: 0 auto;
        #logo {
          height: 32px;
          width: 35px;
        }

        #container-list {
          display: flex;
          font-size: 24px;
          width: 34%;
          justify-content: space-around;

          li {
            cursor: pointer;

            a {

              i {
                color: #41b883;
              }
            }
          }
        }
      }
    }

    .fade-enter , .fade-leave-to {
      opacity: 0;
      transform: translateX(2em);
    }
    .fade-enter-active , .fade-leave-active {
      transition: all .3s ease-in-out;
    }

    main {
      .wrapper {
        max-width: 1070px;
         margin: 0 auto;

        .wrapper__title {
          position: relative;
          margin-bottom: 30px;
          margin-top: 15px;

          .title {
            text-transform: uppercase;
            color: #2B2D42;
            font-weight: 700;
          }
        }
      }
    }
  }

}

</style>
