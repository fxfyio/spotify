<script setup>

</script>



<template>
    <div class="container">
        <div class="left">
   
        </div>
        <div class="right">
            <div class="title">
                标题
            </div>
            <div class="subtitle">
                Playlist 123
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    .left {
        width: 44px;
        height: 44px;
        background-color:#282828 ;
        border-radius: 4px;
    }
    .right {
        margin-left: 8px;
        .title {
            color: white;
            font-weight: bold;
        }
        .subtitle {
            color: #9e9e9e;
            font-weight: 300;
        }
    }
    display: flex;
}
</style>
