<template>
    <div>
      <div data-testid="solar-system"></div>
      <Title headline="Planetas" />
      <PlanetCard
        v-for="planet in planets"
        :key="planet.name"
        :planetName="planet.name"
        :planetImage="planet.image"
      />
    </div>
  </template>
  
  <script>
  import Title from './Title.vue';
  import PlanetCard from './PlanetCard.vue';
  import planets from '../data/planets';
  
  export default {
    name: "SolarSystem",
    components: {
      Title,
      PlanetCard,
    },
    data() {
      return {
        planets: planets,
      };
    },
  };
  </script>

  <style scoped>

  </style>