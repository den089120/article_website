<script setup lang="ts">

import {ButtonStyle} from "./typeButton";

defineProps<{
  btnStyle: ButtonStyle
}>()
</script>

<template>
  <button :class="[ 'app_button', btnStyle]">
    <slot></slot>
  </button>
</template>

<style>
.app_button {
  cursor: pointer;
}
.btn_clear {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
}
</style>
