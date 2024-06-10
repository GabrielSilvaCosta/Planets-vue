<template>
  <div class="mission-card">
    <p class="mission-year">{{ year }}</p>
    <p class="mission-name">{{ name }}</p>
    <p class="mission-country">{{ country }}</p>
    <p class="mission-destination">{{ destination }}</p>
  </div>
</template>

<script>
export default {
  name: "MissionCard",
  props: {
    year: String,
    name: String,
    country: String,
    destination: String,
  },
};
</script>

<style scoped>
.mission-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.mission-year {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.mission-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.mission-country {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
