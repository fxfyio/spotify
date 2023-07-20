<script setup> 
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
//   title: {
//     type: String,
//     required: true
//   },
  color: {
    type: String,
    required: true
  }
})
</script>
<template> 
<div class="icon-play" style="background-color: {{ color }};">
    <div class="triangle"></div>

</div>
</template>

<style>
.icon-play{
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    .triangle {
        position: absolute;
        top: 35%;
        left: 38%;
        /* transform: translate(-50%, -50%);  */

        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid white;
        /* background-color: red; */
        transform: rotate(90deg);
    }
}

.icon-play:hover {
    transform: scale(1.1);
}

</style>