<template>
  <div id="app">
    <Header />
    <SolarSystem />
    <!-- <Missions /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SolarSystem from './components/SolarSystem.vue';

export default {
  name: "App",
  components: {
    Header,
    SolarSystem,
    // Missions,
  }
};
</script>
