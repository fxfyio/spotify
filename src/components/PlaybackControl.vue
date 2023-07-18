<script setup>



</script>

<template>
<div class="playback-control-container">
    <div class="left">
        <div class="p-cover"></div>
        <div class="p-info">
            <div class="p-title">
                歌曲名称
            </div>
            <div class="p-subtitle">
                作者
            </div>
        </div>
        <div class="p-like"></div>
    </div>
    <div class="center">
        <div class="c-buttons">
            <div class="c-buttons-0"></div>
            <div class="c-buttons-1"></div>
            <div class="c-buttons-2"></div>
            <div class="c-buttons-3"></div>
            <div class="c-buttons-4"></div>
        </div>
        <div class="c-bar">
            <div class="c-time c-time-left"> 00:00 </div>
            <div class="progress">
                <div class="progress-bar" style="width:70%"></div>
            </div> 
            <div class="c-time c-time-right"> 10:00 </div>
        </div>

    </div>
    <div class="right">
        <div class="r-button"></div>
        <div class="r-button"></div>
        <div class="r-button"></div>
        <div class="r-button"></div>
        <div class="r-button"></div>
        <div class="progress">
                <div class="progress-bar" style="width:70%"></div>
        </div> 
    </div>
</div>
</template>


<style scoped>

.playback-control-container {
    width: 100%;
    height: 80px;
    color: red;
    font-size: large;
    background-color: black;
    /* justify-content: space-between; */
    display: flex;
    .left {
        width: calc(100vw * 0.25);
        height: 100%;
        padding: 15px;
        display: flex;
        align-items: center;
        .p-cover {
            width: 50px;
            height: 50px;
            border-radius: 4px;
            background-color: gray;
        }

        .p-info {
            width: 30%;
            align-items: center;
            margin-left: 10px;
            .p-title {
                font-weight: 400;
                color: white;
            }

            .p-subtitle {
                font-weight: 300;
                color: gray;
            }

        }


        .p-like {
            width: 24px;
            height: 24px;
            background-color: gray;
            border-radius: 12px;
        }
    }



    .center {
        width: calc(100vw * 0.5);
        height: 100%;
        .c-buttons {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60%;
            .c-buttons-0 {
                width: 24px;
                height: 24px;
                background-color: gray;
                border-radius: 12px;
                margin: 0 10px;
            }
            .c-buttons-0 {
                width: 24px;
                height: 24px;
                background-color: gray;
                border-radius: 12px;
                margin: 0 10px;
            }
            .c-buttons-1 {
                width: 24px;
                height: 24px;
                background-color: gray;
                border-radius: 12px;
                margin: 0 10px;

            }
            .c-buttons-2 {
                width: 44px;
                height: 44px;
                background-color: gray;
                border-radius: 22px;
                margin: 0 10px;

            }
            .c-buttons-3 {
                width: 24px;
                height: 24px;
                background-color: gray;
                border-radius: 12px;
                margin: 0 10px;

            }
            .c-buttons-4 {
                width: 24px;
                height: 24px;
                background-color: gray;
                border-radius: 12px;
                margin: 0 10px;
            }
        }

        .c-bar {
            width: 100%;
            height: 40%;
            display: flex;
            align-items: center;
            .progress {
                height: 4px;
                width: 60%;
                border-radius: 2px;
                background: #4d4c4c;
            }

            .progress-bar {
                width: 50%;
                height: 4px;
                border-radius: 2px;
                background: white;
            }
            .c-time {
                width: 20%;
                height: 20px;
                color: #4d4c4c;
                font-size: 10px;
                font-weight: bold;
            }

            .c-time-left {
                text-align: right;
                margin-right: 10px;
            }
            .c-time-right {
                text-align: left;
                margin-left: 10px;
            }
        }
    }

    .right {
        width: calc(100vw * 0.25);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
        .r-button {
            width: 24px;
            height: 24px;
            background-color: gray;
            border-radius: 12px;
            margin-right: 10px;
        }
        .progress {
            height: 4px;
            width: 120px;
            border-radius: 2px;
            background: #4d4c4c;
            margin-right: 10px;
        }
        
        .progress-bar {
            width: 100px;
            height: 4px;
            border-radius: 2px;
            background: white;
        }
    
    }

}
</style>
