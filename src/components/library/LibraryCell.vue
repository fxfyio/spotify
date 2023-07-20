<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
})
</script>
<template>
    <div class="cell">
        <div class="index"> {{ index + 1}} </div>
        <div class="cover"></div>
        <div class="title-box">
            <div class="title">
                歌名
            </div>
            <div class="subtitle">
                作者
            </div>
        </div>
        <div class="album">专辑名称</div>
        <div class="date"> Des 29, 2022</div>
        <div class="like"> 🩶 </div>
        <div class="time"> 08:23 </div>
    </div>
</template>
<style>
.cell {
    background-color: #121212;
    /* background-color: red; */
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .index {
        width: 44px;
        color: white;
    }

    .cover {
        width: 40px;
        height: 40px;
        background-color: gray;
        border-radius: 4px;
    }
    .title-box {
        margin-left: 20px;
        color: white;
        width: 150px;
        .title {
            font-size: 14px;
            font-weight: bold;
        }
        .subtitle {
            color: white;
            opacity: 0.5;
            font-size: 12px;
        }
    }

    .album {
        width: 150px;
        margin-left: 20px;
        color: white;
        opacity: 0.8;
        margin-left: 20px;
    }

    .date {
        color: white;
        opacity: 0.8;
        margin-left: 20px;
    }

    .like {
        color: white;
        margin-left: 100px;
        opacity: 0.8;
    }
    .time {
        color: white;
        opacity: 0.8;
        margin-left: 100px;

    }

}

.cell:hover {
    border-radius: 4px;
    background-color: #232323;
    /* opacity: 0.5; */
}
</style>