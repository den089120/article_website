<script setup lang="ts">

import {ButtonStyle} from "./typeButton";

defineProps<{
  btnStyle: ButtonStyle,
  disabledIs: boolean
}>()
</script>

<template>
  <button :class="[ 'app_button', btnStyle]"  :disabled="disabledIs">
    <slot></slot>
  </button>
</template>

<style>
.app_button {
  cursor: pointer;
  padding: 6px 15px;
}
.app_button:hover {
  opacity: 0.7;
}
.btn_clear {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
}

.clear_inverted {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
  color: var(--inverted-primary-color);
}
.outline_btn {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background: none;
}
.outline_btn_danger {
  border: 1px solid var(--red-light);
  color: var(--red-light);
  background: none;
}
.background_btn {
  background: var(--bg-color);
  color: var(--primary-color);
  border: none;
}
.background_btn_inverted {
  background: var(--inverted-bg-color);
  color: var(--inverted-primary-color);
  border: none;
}
.btn_collapsed {
  position: absolute;
  right: -32px;
  bottom: 32px;
}
.size-m {
  font: var(--font-m);
}
.size-l {
  font: var(--font-l);
}
.size-xl {
  font: var(--font-xl);
}

.square_btn .size-m {
  width: var(--font-size-m);
  height: var(--font-size-m);
}
.square_btn .size-l {
  width: var(--font-line-l);
  height: var(--font-line-l);
}
.square_btn .size-xl {
  width: var(--font-size-xl);
  height: var(--font-size-xl);
}
.btn_disabled {
  opacity: 0.6;
}
</style>
