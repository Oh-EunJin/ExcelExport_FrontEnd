<template>
  <div id="page-top">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TestWorld /> -->
  
    <HeaderComponent />

    <MainComponent />
    <AboutComponent />
    <ServiceComponent />

    <FooterComponent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import TestWorld from './components/TestWorld.vue';

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServiceComponent from './components/ServiceComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TestWorld,

    HeaderComponent,

    MainComponent,
    AboutComponent,
    ServiceComponent,

    FooterComponent,
  }
}
</script>

<style>
@import "./assets/css/styles.css";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
