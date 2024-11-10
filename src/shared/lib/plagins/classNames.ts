import type { App } from "vue";
import type {typeMods} from "./typeClassNames";

export default {
  install: (app: App) => {
    app.config.globalProperties.$ClassNames = (cls: string = '', Mods:typeMods = {}, additional: Array<string> = [] ): string => {
      return [
        cls,
        ...Object.entries(Mods).filter(([, value]) => Boolean(value)).map(([key]) => key),
        ...additional
      ].join(' ')
    }
  }
}
