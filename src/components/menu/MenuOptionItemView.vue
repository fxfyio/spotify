<script setup>

import MenuOptionItem from './MenuOptionItem.vue'
import IconCommunity from '../icons/IconCommunity.vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['change-view'])

const handleChangeView = (title) => {    
  emits('change-view', title)
}

</script>


<template>
    <div class="container">
        <MenuOptionItem title="Home" @change-view="handleChangeView">
             <vue-feather type="home"></vue-feather>
         </MenuOptionItem>

        <MenuOptionItem title="Search" @change-view="handleChangeView">
            <vue-feather type="search"></vue-feather>
        </MenuOptionItem>
    </div>
</template>



<style scoped>

.container {
    width: 100%;
    height: 120px;
    padding: 10px;
    background-color: #121212;
    border-radius: 8px;

}

</style>
