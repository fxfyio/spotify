<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
})

const emits = defineEmits(['change-view'])

const handleClick = () => {
  emits('change-view', props.title)
}

</script>


<template>
    <div class="option-item highlight" @click="handleClick">
        <slot></slot>
        <span class="item">{{title}}</span>
    </div>
</template>



<style scoped>
.option-item{
    width: 100%;
    height: 44px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-radius: 8px;
    padding: 0 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    .item{
        margin-left: 20px;
    }
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
