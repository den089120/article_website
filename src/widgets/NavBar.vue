<script setup lang="ts">
import {RouterPaths} from "@/router/routerPaths";
import AppLink from "@/shared/UI/appLink/AppLink.vue";
import {LinkClass} from "@/shared/UI/appLink/typeUI";
import ModalApp from "@/shared/UI/modalApp/ModalApp.vue";
import {useGlobalStore} from "@/stores/globalStore";
import AppButton from "@/shared/UI/button/AppButton.vue";
import {ButtonStyle} from "@/shared/UI/button/typeButton";

const globalStore = useGlobalStore();
</script>

<template>
  <div class="navbar">
    <div class="links">
      <AppButton :btn-style="ButtonStyle.CLEAR" :disabled-is="false" @click="globalStore.changeIsModal(true)">
        modal
      </AppButton>
      <AppLink class="main_link" :class-style="LinkClass.SECONDARY" :link="RouterPaths.Main">Home</AppLink>
      <AppLink :class-style="LinkClass.SECONDARY" :link="RouterPaths.About">About</AppLink>
    </div>
    <ModalApp :view-modal="globalStore.isModal" @close-modal="globalStore.changeIsModal(false)">
      text my
    </ModalApp>
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
