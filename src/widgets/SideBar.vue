<script setup lang="ts">
import {useGlobalStore} from "@/stores/globalStore";
import AppButton from "@/shared/UI/button/AppButton.vue";
import {ButtonStyle} from "@/shared/UI/button/typeButton";
import ThemeSwitcher from "@/shared/UI/themeSwitcher/ThemeSwitcher.vue";
import LangSwitcher from "@/shared/UI/langSwitcher/LangSwitcher.vue";

const globalStore = useGlobalStore();

</script>

<template>
  <div class="side_bar_app" :class="{ side_bar_app_collapsed: globalStore.collapsedSideBar }">
    <AppButton
      :btn-style="ButtonStyle.CLEAR"
      @click="globalStore.changeCollapsed"
    >
      toggle
    </AppButton>
    <div class="switchers">
      <ThemeSwitcher/>
      <LangSwitcher/>
    </div>
  </div>

</template>

<style>
.side_bar_app {
  width: var(--sidebar-width);
  height: calc(100vh - var(--navbar-height));
  background-color: var(--inverted-bg-color);
  position: relative;
  transition: width 0.3s;
}
.side_bar_app_collapsed {
  width: var(--sidebar-width-collapsed);
}
.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

</style>
