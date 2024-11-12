<script setup lang="ts">

import AppButton from "@/shared/UI/button/AppButton.vue";
import {ButtonStyle} from "@/shared/UI/button/typeButton";
import {useGlobalStore} from "@/stores/globalStore";
import {computed} from "vue";

const globalStore = useGlobalStore();

const str = computed(()=> {
  return globalStore.collapsedSideBar ? '>' : '<'
})
</script>

<template>
  <AppButton
    :btn-style="ButtonStyle.COLLAPSED"
    :class="['background_btn_inverted', 'square_btn', 'size-l']"
    :disabled-is="false"
    @click="globalStore.changeCollapsed"
  >
    {{ str }}
  </AppButton>
</template>

<style scoped>

</style>
