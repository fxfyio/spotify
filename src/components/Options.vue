<script setup>

import OptionItem from './OptionItem.vue'
import IconCommunity from './icons/IconCommunity.vue'

</script>


<template>
    <div class="container">
        <OptionItem title="Home">
        <IconCommunity />
    </OptionItem>

    <OptionItem title="Search">
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
