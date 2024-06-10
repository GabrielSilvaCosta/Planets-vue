<template>
    <div class="planet-card">
      <h3>{{ planetName }}</h3>
      <div class="image-container">
        <img :src="planetImage" :alt="planetName" class="planet-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PlanetCard",
    props: {
      planetName: {
        type: String,
        required: true,
      },
      planetImage: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .planet-card {
    text-align: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 20px;
    

  }
  
  .planet-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }
  
  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  
  </style>
  