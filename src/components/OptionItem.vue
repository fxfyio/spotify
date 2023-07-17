<script setup>
import IconHome from './icons/IconHome.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>


<template>
    <div class="option-item">
        <slot></slot>
        <span class="item">{{title}}</span>
    </div>
</template>



<style scoped>
.option-item{
    width: 100%;
    height: 44px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-radius: 8px;
    padding: 0 10px;
    color: white;
    font-weight: bold;

    .item{
        margin-left: 20px;
    }
}
</style>
