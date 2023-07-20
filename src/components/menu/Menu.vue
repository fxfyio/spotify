<script setup>
import { defineProps, defineEmits } from 'vue'

import Library from './Library.vue';
import Options from './Options.vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['change-view'])

const handleClick = (title) => {
  emits('change-view', title)
}
</script>

<template>
    <div class="menu" >
        <Options  @change-view="handleClick"/>
        <Library />
    </div>
</template>


<style scoped>
.menu{
    width: 300px;
    height: calc(100vh - 80px);
    background: #000;
    padding: 10px;
}

</style>
