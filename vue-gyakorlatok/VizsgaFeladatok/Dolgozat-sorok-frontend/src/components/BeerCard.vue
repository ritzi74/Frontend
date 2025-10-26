<script setup>
defineProps(['beer'])
</script>

<template>
  <div class="card" @click="$emit('click')">
    <img :src="beer.image" :alt="beer.name" />
    <h3>{{ beer.name }}</h3>
    <p>{{ beer.type }} | {{ beer.alcohol }}%</p>
    <button>Részletek</button>
  </div>
</template>


<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  margin-top: 24px;
}

.card {
  width: 200px;
  min-width: 200px;
  padding: 18px 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  background: #fff;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(32,32,32,0.1);
}

.card img {
  max-width: 100%;
  height: 140px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
