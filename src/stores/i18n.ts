import {
  i18nDefaultLocale,
  i18nMessages,
  type I18nLocaleType,
  type I18nMessagesKeyType,
} from '@/config/i18n'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useI18nStore = defineStore(
  'vue-starter-250611-i18n',
  () => {
    // type I18nLocaleType = "en-US" | "zh-CN" | "zh-TW" ……
    const locale = ref<I18nLocaleType>(i18nDefaultLocale)

    // 在app.vue使用usehead更好
    // // 初始化 html 的 lang 属性
    // onMounted(() => {
    //   document.documentElement.lang = locale.value
    // })

    const localeSet = (code: I18nLocaleType) => {
      locale.value = code
      // 在app.vue使用usehead更好
      // // 更新 html 的 lang 属性
      // document.documentElement.lang = locale.value
    }

    // 好多i18n库都用t命名，来获取语言内容
    const t = <MessageKey extends I18nMessagesKeyType>(
      messageKey: MessageKey
    ): (typeof i18nMessages)[MessageKey][I18nLocaleType] => {
      return i18nMessages[messageKey][locale.value]
    }

    return {
      locale,
      localeSet,
      t,
    }
  },
  {
    persist: true, // 持久化
  }
)
