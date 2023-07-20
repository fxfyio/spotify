<script setup>

</script>



<template>
    <div class="top-bar">
        <div class="left">
            <div class="back" >  </div>
            <div class="next"></div>
        </div>
        <div class="center">
            <div class="icon"></div>
            <input type="text" class="input" placeholder="What do you want to listen to?"> 
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
    background-color: #121212;
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

    .center {
        background-color: #242424;
        width: 400px;
        height: 50px;
        border-radius: 25px;
        align-items: center;
        display: flex;
        padding: 4px 10px;
        border: 2px solid #242424; 
        .icon {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: bisque;
        }
        .input {
            width: 330px;
            height: 100%;
            margin-left: 10px;
            background-color: #242424;
            border: none;
            color: white;
            /* font-weight: bolder; */
            font-size: 20px;
        }
        .input:focus {
            border: none;
            outline: none;
        }
        .input::placeholder {
            font-size: 16px;
        }

        /* Internet Explorer, Edge */
        .input:-ms-input-placeholder {
            font-size: 16px;
        }

        /* Edge 18+ */
        .input::-ms-input-placeholder {
            font-size: 16px;
        }
    }


    .center:focus-within {
         border-color: white; 
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
