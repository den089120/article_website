<script setup lang="ts">
import {RouterPaths} from "@/router/routerPaths";
import { RouterLink } from 'vue-router';
import AppLink from "@/shared/UI/appLink/AppLink.vue";
import {LinkClass} from "@/shared/UI/appLink/typeUI";
</script>

<template>
  <div class="navbar">
    <div class="links">
      <AppLink class="main_link" :class-style="LinkClass.SECONDARY" :link="RouterPaths.Main">Home</AppLink>
      <AppLink :class-style="LinkClass.SECONDARY" :link="RouterPaths.About">About</AppLink>
    </div>

  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  padding: 20px;
}
.links {
  margin-left: auto;
}
.main_link {
  margin-right: 15px;
}

</style>
