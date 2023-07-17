<script setup>
import Library from './Library.vue';
import Options from './Options.vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="menu">
        <Options/>
        <Library />
    </div>
</template>


<style scoped>
.menu{
    width: 300px;
    height: 100vh;
    background: #000;
    padding: 10px;
}

</style>
