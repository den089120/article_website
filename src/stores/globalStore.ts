import {ref} from 'vue';
import {defineStore} from 'pinia';
import type {TypeGlobalStore} from "@/stores/typesStores/typeGlobalStore";
import {themeName} from "@/stores/typesStores/typeGlobalStore";
import { LOCALE_STORAGE_THEME } from "@/Costants";

export const useGlobalStore = defineStore('global', (): TypeGlobalStore => {
  const theme = ref<themeName>(localStorage.getItem(LOCALE_STORAGE_THEME) as themeName || themeName.NORMAL)

  function changeTheme( themeNew: themeName) {
    theme.value = themeNew
    localStorage.setItem(LOCALE_STORAGE_THEME, themeNew)
  }

  return { theme, changeTheme }
})
