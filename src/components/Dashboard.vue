<script setup>
import Albums from './Albums.vue';
import DashboardBanner from './DashboardBanner.vue';
import DashboardRecomend from './DashboardRecomend.vue';
import DashboardTopbar from './DashboardTopbar.vue';


</script>

<template>
    <div class="dashboard">
        <DashboardTopbar/>
        <div class="dashboard-block">
            <DashboardBanner/>
            <DashboardRecomend/>
            <Albums title="You shows"/>
        </div>
    </div>
</template>


<style scoped>
.dashboard {
    background-color:  #121212;
    width: calc(100vw - 300px);
    /* height: calc(100vh -10px); */
    border-radius: 8px;
    margin-top: 10px;
    padding-right: 22px;

    .dashboard-block {
        overflow: auto;
        height: calc(100vh - 80px);

        .item{
            height: 50px;
            /* background: yellow; */
            margin-top: 10px;
        }

        &::-webkit-scrollbar {
            width: 10px;
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #a7a7a7;
            border-radius: 16px;
            box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.10);
        }
    }

    
}
</style>
