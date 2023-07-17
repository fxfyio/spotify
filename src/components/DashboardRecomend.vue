<script setup>
import DashboardRecomendItem from './DashboardRecomendItem.vue';

</script>

<template>
    <div class="recomend">
        <h1 class="title">Good evening</h1>
        <div class="list">

        <div class="grid-container">
            <div class="grid-item"> <DashboardRecomendItem/></div>
            <div class="grid-item"> <DashboardRecomendItem/></div>
            <div class="grid-item"> <DashboardRecomendItem/></div>
            <div class="grid-item"> <DashboardRecomendItem/></div>
            <div class="grid-item"> <DashboardRecomendItem/></div>
            <div class="grid-item"> <DashboardRecomendItem/></div>
        </div>

        </div>
    </div>
</template>

<style scoped>
.recomend {
    height: 200px;
    width: 100%;
    border-radius: 10px;
    .title {
        font-weight: bold;
        color: white;
    }
    
}
.grid-container {
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto auto auto;
}

.grid-item {
  background-color: #2a2929;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
 margin-bottom: 10px;
}
</style>