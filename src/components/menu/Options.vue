<script setup>

import OptionItem from './OptionItem.vue'
import IconCommunity from '../icons/IconCommunity.vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['change-view'])

const handleChangeView = (title) => {    
  emits('change-view', title)
}

</script>


<template>
    <div class="container">
        <OptionItem title="Home" @change-view="handleChangeView">
        <IconCommunity />
    </OptionItem>

    <OptionItem title="Search" @change-view="handleChangeView">
        <IconCommunity/>
    </OptionItem>
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
