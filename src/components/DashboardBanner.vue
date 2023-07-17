<script setup>
import { ref } from 'vue';

</script>


<template>
<div class="banner">
  <div class="wrap">
    <img
      src="https://images.unsplash.com/photo-1689351060804-fca36e095da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
    />
    <img
      src="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
    />
    <img
      src="https://images.unsplash.com/photo-1687984351000-1afcdcfe5913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
    />
  </div>
</div>
</template>


<style scoped>


/* 容器大小 */
.banner {
  height: 200px;
  width: calc(100vw - 300px);
  overflow: hidden;
  align-items: center;
  margin-top: 10px;
  border-radius: 10px;
}

.wrap {
  position: relative;
  left: 0px;
  width: calc(300vw - 900px);
  animation: animateImg ease 5s infinite normal;
}

/* 图片大小 */
.wrap img {
  width: calc(100vw - 300px);
  float: left;
  height: 200px;
  display: block;
  object-fit: cover;
}

/* 动画 */
@keyframes animateImg {
  0% {
    left: 0px;
  }
  20% {
    left: -0px;
  }
  40% {
    left: calc( -100vw + 300px);
  }
  60% {
    left: calc( -100vw + 300px);
  }
  80% {
    left: calc( -200vw + 600px);
  }
  100% {
    left: calc( -200vw + 600px);
  }
}

</style>
