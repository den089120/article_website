<script setup lang="ts">
import {useGlobalStore} from "@/stores/globalStore";
import {ref} from "vue";
import {langName} from "@/stores/typesStores/typeGlobalStore";

const selectLang = ref<langName>(langName.RU)
const globalStore = useGlobalStore();

</script>

<template>
  <div class="lang_switcher">
    <select v-model="selectLang" @change="globalStore.changeLang(selectLang)">
      <option :value="langName.RU" selected>{{ globalStore.collapsedSideBar ? 'Ру' : 'Русский' }}</option>
      <option :value="langName.EN">{{ globalStore.collapsedSideBar ? 'En' : 'English' }}</option>
      <option :value="langName.ZH">中国人</option>
    </select>
  </div>
</template>

<style scoped>
.lang_switcher {
  display: flex;
}
.lang_switcher select {
  outline: none;
  border: none;
  appearance: none;
  background: var(--inverted-bg-color);
  margin-left: 10px;
  color: var(--primary-color);
  cursor: pointer;
}

</style>
