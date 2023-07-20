<script setup>
import LibraryCell from "./LibraryCell.vue";
</script>


<template> 
    <div class="library-list">
        <LibraryCell v-for="item in 100"/>
    </div>
</template>


<style scoped> 
.library-header {
    width: 100%;
    background-color: #181414;
}
</style>