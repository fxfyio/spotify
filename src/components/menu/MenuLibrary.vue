<script setup>
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconTooling from '../icons/IconTooling.vue'
import IconSupport from '../icons/IconSupport.vue'
import List from './MenuLibraryList.vue'

import {defineEmits } from 'vue'


const emits = defineEmits(['change-view'])

const handleClick = (index) => {
  emits('change-view', "Library", index)
}


</script>



<template>
    <div class="containter">
        <div class="library">
            <div class="top">
              <IconDocumentation class="item"/>
              <span class="item"> You Library</span>  
              <vue-feather type="plus" class="item plus"></vue-feather>
              <vue-feather type="arrow-right" class="item arrow-right"></vue-feather>
            </div>
            <div class="bottom">
                <div class="item">PlayLists</div>
                <div class="item">Albums</div>
                <div class="item">Artists</div>
            </div>
        </div>

        <div class="library-list">
            <List class="item"  v-for="(item, index) in 8"  @click="handleClick(index)" :index="index">111</List>
        </div>
    </div>

</template>


<style scoped>

.containter {
    border-radius: 10px;
}
.library {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    /* background-color: #121212; */
    .top {
        display: flex;
        align-items: center;
        /* justify-content: space-evenly; */
        height: 44px;
        color: white;
        opacity: 0.75;
        .item{
            cursor: pointer;
            margin-left: 20px;
        }
        .plus {
            padding: 4px;
        }

        .arrow-right {
            padding: 4px;
        }

        .plus:hover {
            background-color:#232323;
            border-radius: 50%;
        }

        .arrow-right:hover {
            background-color:#232323;
            border-radius: 50%;
        }

    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 44px;

        .item {
            background-color: #232323;
            border-radius: 22px;
            width: 80px;
            text-align: center;
            color: white;
            cursor: pointer;
        }
        
 

    }
}

.library-list {
    width: 100%;
    height: calc(100vh - 120px - 100px - 10px - 20px - 80px);
    overflow: auto;
    background-color: #121212;
    padding:0 10px;

    .item{
        height: 60px;
        /* background: yellow; */
        margin-top: 10px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 16px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #a7a7a7;
        border-radius: 16px;
        box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.10);
    }

}

</style>
