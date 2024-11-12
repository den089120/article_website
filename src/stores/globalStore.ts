import {ref} from 'vue';
import {defineStore} from 'pinia';
import type {TypeGlobalStore} from "./typesStores/typeGlobalStore";
import {langName, themeName} from "./typesStores/typeGlobalStore";
import {LOCALE_STORAGE_THEME} from "@/Costants";
import { i18n } from "@/shared/lib/i18n";

export const useGlobalStore = defineStore('global', (): TypeGlobalStore => {
  const theme = ref<themeName>(localStorage.getItem(LOCALE_STORAGE_THEME) as themeName || themeName.NORMAL)
  const collapsedSideBar = ref<boolean>(false)
  const langApp = ref<langName>(langName.RU)
  const isModal = ref<boolean>(false)

  function changeCollapsed () {
    collapsedSideBar.value = !collapsedSideBar.value
  }
  function changeTheme( themeNew: themeName) {
    theme.value = themeNew
    localStorage.setItem(LOCALE_STORAGE_THEME, themeNew)
  }
  function changeLang (langNew: langName) {
    langApp.value = langNew
    i18n.global.locale = langNew
  }
  function changeIsModal (newValue: boolean) {
    isModal.value = newValue
  }

  return { theme, collapsedSideBar, langApp, isModal, changeTheme, changeCollapsed, changeLang, changeIsModal }
})
