<script setup>
import Menu from './components/Menu.vue'
import Dashboard from './components/Dashboard.vue';
import PlaybackControl from './components/PlaybackControl.vue';
import Search from './components/Search.vue';
import { ref } from 'vue'

let mainView = ref('Home')

const handleChangeView = (title) => {
  mainView.value = title
}
</script>

<template>
  <div class="container">
    <div class="container-content">
    
    <header class="wrapper">
      <Menu @change-view="handleChangeView" />
    </header>

    
    <main class="main">
      <Dashboard v-if="mainView === 'Home'"  />
      <Search v-if="mainView === 'Search'" />
    </main>
    </div>
    <footer>
      <PlaybackControl />
    </footer>
</div>

</template>

<style scoped>
.container-content {
  display: flex;
  background-color: #000;
}
</style>
