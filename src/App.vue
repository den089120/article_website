<script setup lang="ts">
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

import {useGlobalStore} from "@/stores/globalStore";
import {themeName} from "@/stores/typesStores/typeGlobalStore";

const globalStore = useGlobalStore();
function changeTheme () {
  if (globalStore.theme === themeName.NORMAL) {
    globalStore.changeTheme(themeName.DARK)
  } else {
    globalStore.changeTheme(themeName.NORMAL)
  }
}
</script>

<template>
  <div :class="[ 'app', globalStore.theme ]">
    <button @click="changeTheme">theme</button>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

</style>
