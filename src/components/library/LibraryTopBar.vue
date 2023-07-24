<script setup>
import { defineProps , watchEffect} from 'vue';

const props = defineProps({
    opacity: {
        type: Number,
        default: 0,
    }
})

watchEffect(() => {
    console.log('opacity:', props.opacity);
});
</script>



<template>
<div class="top-bar" :style="{backgroundColor: `rgba(89, 58, 58, ${props.opacity})`}">
        <div class="left">
            <div class="back" >  </div>
            <div class="next"></div>
        </div>
        <div class="right">
            <div class="explore-premium"> Explore Premium</div>
            <div class="group"></div>
            <div class="user"></div>
        </div>
    </div>
</template>


<style scoped>
.top-bar {
    height: 60px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        .back {
            width: 36px;
            height: 36px;
           background-color: gray;
           margin-left: 10px;
           border-radius: 18px;
        }
        .next {
            width: 36px;
            height: 36px;
           background-color: #1c212e;
           margin-left: 10px;
           border-radius: 18px;
        }
        display: flex;
    }

    .right {
        align-items: center;
        .explore-premium {
            background-color: white;
            width: 160px;
            height: 36px;
            border-radius: 18px;
            align-items: center;
            margin-right: 20px;
            font-weight: bold;
            display: grid;
            place-items: center; 
        }
        .group {
            width: 36px;
            height: 36px;
            background-color: gray;
            border-radius: 18px;
            margin-right: 10px;
        }

        .user {
            width: 36px;
            height: 36px;
            background-color: gray;
            border-radius: 18px;
            margin-right:30px;
        }
        display: flex;
    }
}
</style>
