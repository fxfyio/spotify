<script setup>
import Menu from './components/menu/Menu.vue'
import Dashboard from './components/home/Dashboard.vue';
import PlaybackControl from './components/PlaybackControl.vue';
import Search from './components/search/Search.vue';
import { ref } from 'vue'
import LibraryMain from './components/library/LibraryMain.vue';

let mainView = ref('Home')
let index = ref(0)

const props = defineProps({
  index: {
    type: Number
  }
})

const handleChangeView = (title, i) => {
  mainView.value = title
  index.value = i
  console.log(title)
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
      <LibraryMain v-if="mainView === 'Library'" :index="index" />
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
