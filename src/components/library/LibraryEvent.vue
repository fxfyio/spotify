<script setup>
import IconPlay from '../icons/IconPlay.vue';
</script>

<template> 
    <div class="library-event">
        <div class="event-left">
            <IconPlay class="icon-play-th" />
            <div class="event download"></div>
            <div class="event user"></div>
            <div class="event more"></div>
        </div>
        <div class="event-right">
            <div class="serach">

            </div>
            <div class="fliter">
                Sort by
            </div>
        </div>
    </div>
</template>
<style scoped> 
.library-event {
    width: 100%;
    height: 100px;
    background-color: #271c1b;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .event-left {
        display: flex;
        align-items: center;

        .icon-play-th {
            width: 60px;
            height: 60px;
            background-color: #1cd760;
            margin-left: 20px;
        }
        .event {
            width: 36px;
            height: 36px;
            background-color:gray;
            margin-left: 20px;

        }

        .download {
            margin-left: 40px;
        }
    }

    .event-right {
        display: flex;
        align-items: center;

        .serach {
            background-color: gray;
            width: 36px;
            height: 36px;
            margin-right: 20px;
        }
        .fliter {
            margin-right: 20px;
            color: white;
            opacity: 0.7;
        }
    }
}
</style>