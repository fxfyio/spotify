<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SlideMenu from './components/SlideMenu.vue'
import Dashboard from './components/Dashboard.vue';

</script>

<template>

  <div class="container">
    <header class="wrapper">
      <SlideMenu  />
    </header>
    <main class="main">
      <Dashboard />
    </main>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  background-color: #000;
}
</style>
