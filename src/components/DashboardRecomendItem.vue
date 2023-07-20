<script setup>

</script>

<template>
    <div class="recomend-item">

        <div class="image"></div>
        <h3  class="title">标题标题标题标题标题标题标题标题标</h3>
    </div>
</template>

<style scoped>
.recomend-item {
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: #2a2929;
    .image {
        width: 80px;
        height: 80px;
        background-color: lightslategray;
    }
    .title {
        color: white;
        margin-left: 10px;
        width: 190px;
        text-align: left;
        font-weight: bold;
        font-size: medium;
    }
    cursor: pointer;
}
</style>