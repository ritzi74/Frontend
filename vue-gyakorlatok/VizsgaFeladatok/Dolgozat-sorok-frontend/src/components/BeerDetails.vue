<template>
  <div class="details-container">
    <div class="beer-img">
      <img :src="beer.image" :alt="beer.name" />
    </div>
    <div class="beer-info">
      <h2>{{ beer.name }}</h2>
      <h4 class="type">{{ beer.type }} • {{ beer.brewery }}</h4>
      <div class="info-table">
        <div>
          <b>Azonosító:</b> {{ beer.id }}
        </div>
        <div>
          <b>Alkoholfok:</b> {{ beer.alcohol }}%
        </div>
        <div>
          <b>Értékelés:</b>
          <div class="rating-bar">
            <div
              class="filled"
              :style="{ width: (beer.rating * 20) + '%' }"
            ></div>
          </div>
          <div>{{ beer.rating }}/5</div>
        </div>
      </div>
      <div class="desc">
        <h3>Leírás</h3>
        <p>{{ beer.description }}</p>
      </div>
      <router-link to="/beers" class="back-btn">Vissza a listához</router-link>
    </div>
  </div>
</template>

<script setup>
import { useBeersStore } from '@/store/beers'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const beersStore = useBeersStore()
const beer = computed(() => beersStore.beers.find(b => b.id === Number(route.params.id)))
</script>

<style scoped>
.details-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  background: #fff;
  padding: 32px 42px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(60,60,60,0.1);
  max-width: 950px;
  margin: 32px auto 0 auto;
}
.beer-img {
  min-width: 170px;
  max-width: 170px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.beer-img img {
  max-width: 170px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(60,60,60,0.07);
}
.beer-info {
  flex: 1;
}
.info-table {
  display: flex;
  gap: 32px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px 24px;
  margin-bottom: 12px;
  background: #f7f7fa;
  font-size: 1.03em;
}
.info-table > div {
  min-width: 130px;
}
.rating-bar {
  display: flex;
  align-items: center;
  background: #eee;
  height: 17px;
  border-radius: 8px;
  width: 180px;
  margin: 6px 0;
  overflow: hidden;
  position: relative;
}
.rating-bar .filled {
  background: #24943a;
  height: 100%;
  transition: width 0.4s;
}
.desc {
  margin: 18px 0 16px 0;
}
.back-btn {
  display: inline-block;
  background: #eee;
  color: #222;
  border-radius: 8px;
  padding: 7px 19px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 8px;
}
.type {
  color: #666;
  font-size: 1em;
  margin-bottom: 10px;
}
</style>
