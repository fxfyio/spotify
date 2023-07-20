<script setup></script>

<template> 
    <div class="library-header">
        <div class="library-header-cover">

        </div>
        <div class="library-info">
            <div class="playlist">
                public playlist
            </div>
            <div class="title">
               Dtd Playlist-FAVORITE SONGS ❤️
            </div>
            <div class="subtitle">
                Created By Dtd Playlist App 
            </div>
            <div class="auther-info">
                <div class="avatar"></div>
                <div class="count">Nickname 13 songs</div>
                <div class="time"> 44 min 58 sec</div>
            </div>
        </div>
    </div>
</template>
<style scoped> 
.library-header {
    width: 100%;
    height: 300px;
    background-color: #593a3a;
    display: flex;
    .library-header-cover {
        width: 190px;
        height: 190px;
        margin-left: 20px;
        margin-top: 100px;
        background-color: gray;
    }

    .library-info {
        /* background-color: red; */
        width: 800px;
        height: 150px;
        margin-top: 140px;
        padding: 0 10px;

        .playlist {
            color: white;
            font-weight: bold
        }

        .title {
            font-weight: bold;
            color: white;
            font-size: 36px;
            margin-top: 8px;
        }

        .subtitle {
            color: white;
            opacity: 0.5;
        }

        .auther-info {
            display: flex;
            align-items: center;
            margin-top: 12px;

            .avatar {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                background-color: gray;
            }
            .count {
                color: white;
                font-weight: bold;
                margin-left: 8px;
                font-size: 12px;
            }
            .time {
                color: white;
                opacity: 0.5;
                font-weight: bold;
                font-size: 12px;
                margin-left: 8px;

            }
        }
    }
}
</style>