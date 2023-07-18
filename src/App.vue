<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SlideMenu from './components/SlideMenu.vue'
import Dashboard from './components/Dashboard.vue';
import PlaybackControl from './components/PlaybackControl.vue';

</script>

<template>
 <div class="container">
    <div class="container-content">
      <header class="wrapper">
      <SlideMenu  />
    </header>
    <main class="main">
      <Dashboard />
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
