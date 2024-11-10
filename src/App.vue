<script setup lang="ts">
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

import {RouterPaths} from "@/router/routerPaths";

import {useGlobalStore} from "@/stores/globalStore";
import {themeName} from "@/stores/typesStores/typeGlobalStore";
import NavBar from "@/widgets/NavBar.vue";
import IconTemplate from "@/shared/UI/iconComponent/IconTemplate.vue";
import {ColorsIcon} from "@/shared/UI/iconComponent/ColorsIcon";
import IconThemeDark from "@/shared/UI/iconComponent/icons/IconThemeDark.vue";
import IconThemeNormal from "@/shared/UI/iconComponent/icons/IconThemeNormal.vue";
import AppButton from "@/shared/UI/button/AppButton.vue";
import {ButtonStyle} from "@/shared/UI/button/typeButton";

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
    <NavBar/>
    <AppButton :btn-style="ButtonStyle.CLEAR" @click="changeTheme">
      <IconTemplate width="40px" :icon-color="ColorsIcon.BG_COLOR" height="40px">
        <IconThemeNormal v-if="globalStore.theme === themeName.NORMAL"/>
        <IconThemeDark v-else/>
      </IconTemplate>
    </AppButton>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

</style>
