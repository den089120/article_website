<script setup lang="ts">


import type {ColorsIcon} from "./ColorsIcon";

defineProps<{
  width:String,
  height: String,
  iconColor: ColorsIcon
}>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
  >
    <g :fill="iconColor">
      <slot></slot>
    </g>
  </svg>
</template>

<style scoped>

</style>
