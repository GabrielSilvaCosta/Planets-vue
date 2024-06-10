<template>
    <div class="title">
      <h1>{{ headline }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "Title",
    props: ["headline"],
  };
  </script>
  
  <style scoped>

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #333;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 20px;
    }

  </style>
  