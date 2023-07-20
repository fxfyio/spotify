<script setup>
import AlbumItem from './AlbumItem.vue';


defineProps({
  title: {
    type: String,
    required: true
  },
})

</script>

<template>
  <div class="albums-container" >
    <div class="albums" v-for="item in 5">
        <div class="albums-top">
            <div class="albums-top-title"> {{ title }}</div>
            <div class="albums-top-more">Show all</div>
        </div>
        <div class="albums-list">
            <AlbumItem v-for="item in 4"  />
        </div>
        
    </div>
  </div>
</template>


<style scoped>
.albums-container {
    /* overflow: auto; */
    /* height: calc(100vh - 520px); */
    .albums {
        width: 100%;
        height: 300px;
        .albums-top {
            display: flex;
            justify-content: space-between;
            padding: 0 10px;

            .albums-top-title {
                font-weight: bold;
                color: white;
                font-size: 30px;
            }

            .albums-top-more {
                color: #b3b3b3;
                font-weight: bold;
                cursor: pointer;
            }
        }

        .albums-list {
            display: flex;
            /* justify-content: space-around; */
        }
    }
    
}


</style>
