<script setup>
import DashboardBanner from './DashboardBanner.vue';
import DashboardRecomend from './DashboardRecomend.vue';
import DashboardTopbar from './DashboardTopbar.vue';


</script>

<template>
    <div class="dashboard">
        <div>
            <DashboardTopbar/>
            <DashboardBanner/>
            <DashboardRecomend/>
        </div>
    </div>
</template>


<style scoped>
.dashboard {
    background-color:  #121212;
    width: calc(100vw - 300px);
    height: 100%;
    border-radius: 8px;
    margin-top: 10px;

}
</style>
