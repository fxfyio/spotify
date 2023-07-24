<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import LibraryCell from "./LibraryCell.vue";

const scrollPosition = ref(0);


onMounted(() => {
    const handleScroll = e => {
        print("111111");
        scrollPosition.value = e.target.scrollTop;
        emit('scroll', scrollPosition.value);
    };


    window.addEventListener('scroll', handleScroll);

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
});


</script>


<template> 
    <div class="library-list">
        <LibraryCell v-for="(item, index) in 100" :index="index"/>
    </div>
</template>


<style scoped> 
.library-header {
    width: 100%;
    background-color: #181414;
}
</style>