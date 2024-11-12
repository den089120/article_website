<script setup lang="ts">

import {useGlobalStore} from "@/stores/globalStore";
import {themeName} from "@/stores/typesStores/typeGlobalStore";
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
  <AppButton :btn-style="ButtonStyle.CLEAR" @click="changeTheme" :disabled-is="false">
    <IconTemplate width="40px" :icon-color="ColorsIcon.BG_COLOR" height="40px">
      <IconThemeNormal v-if="globalStore.theme === themeName.NORMAL"/>
      <IconThemeDark v-else/>
    </IconTemplate>
  </AppButton>
</template>

<style scoped>

</style>
