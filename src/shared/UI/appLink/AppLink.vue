<script setup lang="ts">
import {RouterPaths} from "@/router/routerPaths";
import {RouterLink} from 'vue-router';
import {LinkClass} from "./typeUI";

defineProps<{
  link: RouterPaths;
  classStyle: LinkClass;
}>()

</script>

<template>
  <RouterLink :to="link" :class="['app_link', classStyle]">
    <slot></slot>
  </RouterLink>
</template>

<style>
.app_link {
  color: var(--primary-color);
}
.primary_link {
  color: var(--primary-color);
}
.secondary_link {
  color: var(--inverted-secondary-color);
}
</style>
