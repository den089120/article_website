import type {Ref} from "vue";

export enum themeName {
  DARK= 'dark',
  NORMAL='normal'
}

export enum langName {
  RU = 'ru',
  EN = 'en',
  ZH = 'zh'
}

export interface TypeGlobalStore {
  theme: Ref<themeName, themeName>;
  langApp: Ref<langName, langName>;
  collapsedSideBar: Ref<boolean, boolean>;
  changeCollapsed: () => void;
  changeTheme: (themeNew: themeName) => void;
  changeLang: (langNew: langName) => void;
}
