<script setup>



</script>

<template>
    <div class="album-item">
        <div class="album-item-cover"></div>
        <div class="album-item-title">标题标题标题</div>
        <div class="album-item-subtitle">子标题</div>
    </div>
</template>


<style scoped>
.album-item {
    background-color: #171717;
    height: 240px;
    border-radius: 10px;
    padding: 20px;
    margin-right: 30px;
    cursor: pointer;
    .album-item-cover{
        width: 160px;
        height: 160px;
        border-radius: 10px;
        background-color: brown;
    }
    .album-item-title {
        color: white;
    }

    .album-item-subtitle {
        color: #5e5e5e;
    }

}
</style>
