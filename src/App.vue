<script setup lang="ts">
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router';
import {useGlobalStore} from "@/stores/globalStore";
import NavBar from "@/widgets/NavBar.vue";
import SideBar from "@/widgets/SideBar.vue";

const globalStore = useGlobalStore();
</script>

<template>
  <div :class="[ 'app', globalStore.theme ]">
    <NavBar/>
    <div class="content_page">
      <SideBar/>
      <div class="page_wrapper">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
