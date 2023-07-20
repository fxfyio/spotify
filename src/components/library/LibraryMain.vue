<script setup>
import LibraryHeader from './LibraryHeader.vue';
import LibraryTopBar from './LibraryTopBar.vue';
import LibraryEvent from './LibraryEvent.vue';
import LibraryList from './LibraryList.vue'
import LibraryCell from './LibraryCell.vue';

import { defineProps } from 'vue';
defineProps({
    index: {
        type: Number,
    },
})


</script>

<template>
    <div class="library">
        <div class="top-bar-box">
            <LibraryTopBar />
        </div>
        <div class="library-container">
            <LibraryHeader :index="index" />
            <LibraryEvent />
            <LibraryList />
        </div>
    </div>
</template>

<style scoped>
.library {
    background-color:  #121212;
    width: calc(100vw - 300px);
    /* height: calc(100vh -10px); */
    border-radius: 8px;
    margin-top: 10px;
    padding-right: 22px;
    .library-container {
        overflow: auto;
        background-color: #121212;
        width: calc(100vw - 300px);
        height: calc(100vh - 100px);
        position: absolute;
        z-index: 1;
        border-radius: 10px;

        .item{
            height: 50px;
            /* background: yellow; */
            margin-top: 10px;
        }

        &::-webkit-scrollbar {
            width: 10px;
            height: 0px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #a7a7a7;
            border-radius: 16px;
            box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.10);
        }
    }
    .top-bar {
        position: absolute;
        z-index: 2;
        width: calc(100vw - 300px);
        margin-right: 10px;
        background-color: rgba(0, 0, 0, 0);  /* 半透明的黑色背景 */

    }
    
}
</style>