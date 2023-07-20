<script setup>

import SearchBrowseItem from './SearchBrowseItem.vue';
</script>


<template>
    <h1>Browse all</h1>

    <div class="grid-container" v-for="item in 68">
        <div class="grid-item"> <SearchBrowseItem/></div>
        <div class="grid-item"> <SearchBrowseItem/></div>
        <div class="grid-item"> <SearchBrowseItem/></div>
        <div class="grid-item"> <SearchBrowseItem/></div>
        <div class="grid-item"> <SearchBrowseItem/></div>
        <div class="grid-item"> <SearchBrowseItem/></div>
    </div>

</template>


<style scoped>
    h1 {
        color: white;
        font-weight: bold;
        font-size: 30px;
        margin-left: 10px;
        margin-top: 10px;
    }
    .grid-container {
        display: flex;
        column-gap: 0px;
        /* padding: 10px; */
        /* grid-template-columns: auto auto auto auto; */

    }

    .grid-item {
        padding: 20px;

    }
</style>