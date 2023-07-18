<script setup>

</script>



<template>
    <div class="top-bar">
        <div class="left">
            <div class="back" >  </div>
            <div class="next"></div>
        </div>
        <div class="right">
            <div class="upgrade"> Upgrade</div>
            <div class="group"></div>
            <div class="user"></div>
        </div>
    </div>
</template>


<style scoped>
.top-bar {
    background-color: #303950;
    height: 60px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        .back {
            width: 36px;
            height: 36px;
           background-color: #0f1118;
           margin-left: 10px;
           border-radius: 18px;
        }
        .next {
            width: 36px;
            height: 36px;
           background-color: #1c212e;
           margin-left: 10px;
           border-radius: 18px;
        }
        display: flex;
    }

    .right {
        align-items: center;
        .upgrade {
            background-color: white;
            width: 80px;
            height: 36px;
            border-radius: 18px;
            align-items: center;
            margin-right: 20px;
            font-weight: bold;
            display: grid;
            place-items: center; 
        }
        .group {
            width: 36px;
            height: 36px;
            background-color: gray;
            border-radius: 18px;
            margin-right: 10px;
        }

        .user {
            width: 36px;
            height: 36px;
            background-color: gray;
            border-radius: 18px;
            margin-right: 10px;
        }
        display: flex;
    }
}
</style>
