<script setup>
import AlbumItem from './AlbumItem.vue'

</script>


<template>
<div class="search-recent">
    <div class="search-top">
        <div class="title">
            Recent Searchs
        </div>
        <div class="more">
            Show all
        </div>
    </div>
    <div class="list">
        <AlbumItem v-for="item in 4" />
    </div>
</div>
</template>



<style scoped>
.search-recent {
    border-radius: 10px;
    margin-top: 10px;

    .search-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .title {
            color: white;
            font-weight: bold;
            font-size: 30px;
        }
    }
    .list {
        display: flex;
    }
}
</style>