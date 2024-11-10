import type {Ref} from "vue";

export enum themeName {
  DARK= 'dark',
  NORMAL='normal'
}

export interface TypeGlobalStore {
  theme: Ref<themeName, themeName>;
  changeTheme: (themeNew: themeName) => void;
}
