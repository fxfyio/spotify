<script setup>
import { defineProps, defineEmits } from 'vue'

import MenuLibrary from './MenuLibrary.vue';
import MenuOptionItemView from './MenuOptionItemView.vue';

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })

const emits = defineEmits(['change-view'])

const handleClick = (title, index) => {
  emits('change-view', title, index)
}
</script>

<template>
    <div class="menu" >
        <MenuOptionItemView  @change-view="handleClick"/>
        <MenuLibrary @change-view="handleClick"/>
    </div>
</template>


<style scoped>
.menu{
    width: 300px;
    height: calc(100vh - 80px);
    background: #000;
    padding: 10px;
}

</style>
