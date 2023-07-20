<script setup>
import LibraryCell from "./LibraryCell.vue";



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