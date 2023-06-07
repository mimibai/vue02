<template>
  <div id="app">
    <Header />
    <AppMain />
    <Footer />
  </div>
</template>
<script>
import Footer from "./views/home/layout/components/Footer.vue";
import Header from "./views/home/layout/components/Header.vue";
import AppMain from "./views/home/layout/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    AppMain,
    Footer
  },
  mounted:function(){},
  methods: {},
};
</script>
<style>
@import "./assets/css/conmon.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
