<script setup>
import SearchTopbar from './SearchTopbar.vue';
import SearchRecent from './SearchRecent.vue';
import SearchBrowseAll from './SearchBrowseAll.vue';

</script>

<template>

    <div class="search-content">
        <SearchTopbar />
        <div class="search-block">
             <SearchRecent />
             <SearchBrowseAll />
        </div>

    </div>
</template>



<style scoped>
.search-content {
    background-color:  #121212;
    width: calc(100vw - 300px);
    border-radius: 8px;
    margin-top: 10px;
    padding-right: 22px;
    overflow: hidden;

    .search-block {
        overflow: auto;
        height: calc(100vh - 160px);

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
}


</style>
