<script setup>
// import { defineExpos } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
})



</script>



<template>
    <div class="container highlight">
        <div class="left">
   
        </div>
        <div class="right">
            <div class="title">
                标题 {{ "000" + (index+ 1)}}
            </div>
            <div class="subtitle">
                Playlist {{ index + 1 }}
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
    cursor: pointer;
}

.highlight {
  background-color: #121212; 
  border-radius: 8px;
  padding: 8px;
  align-items: center;
}

.highlight:hover {
  background-color: #181818;
}
</style>
