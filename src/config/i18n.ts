// 导入element-plus的国际化配置（将控制某些组件如时间选择器的语言）
import elEnUS from 'element-plus/es/locale/lang/en'
import elZhCN from 'element-plus/es/locale/lang/zh-cn'
import elZhTW from 'element-plus/es/locale/lang/zh-tw'

import {
  enUS as nuEnUS,
  dateEnUS as nuDateEnUS,
  zhCN as nuZhCN,
  dateZhCN as nuDateZhCN,
  zhTW as nuZhTW,
  dateZhTW as nuDateZhTW,
} from 'naive-ui'

// 当前所支持的语言，格式：(ISO 639-1)-(Country Code)
export const i18nLocaleList = ['en-US', 'zh-CN', 'zh-TW'] as const

// 通过类型体操，根据i18nLocaleList的值得到联合类型（Union Types）
export type I18nLocaleType = (typeof i18nLocaleList)[number]

// 语言信息
export const i18nLocaleInfo = {
  'en-US': {
    language: 'English',
    region: 'USA',
    elLocale: elEnUS,
    nuLocale: nuEnUS,
    nuDateLocale: nuDateEnUS,
  },
  'zh-CN': {
    language: '简体中文',
    region: '中国',
    elLocale: elZhCN,
    nuLocale: nuZhCN,
    nuDateLocale: nuDateZhCN,
  },
  'zh-TW': {
    language: '繁體中文',
    region: '台灣',
    elLocale: elZhTW,
    nuLocale: nuZhTW,
    nuDateLocale: nuDateZhTW,
  },
} as const satisfies Record<
  // 确保类型正确
  I18nLocaleType,
  {
    language: string
    region: string
    elLocale: typeof elEnUS | typeof elZhCN | typeof elZhTW
    nuLocale: typeof nuEnUS | typeof nuZhCN | typeof nuZhTW
    nuDateLocale: typeof nuDateEnUS | typeof nuDateZhCN | typeof nuDateZhTW
  }
>

// 默认语言，优先使用navigator.language，否则i18nfallbackLocale
const i18nfallbackLocale = 'en-US'
export const i18nDefaultLocale: I18nLocaleType = (() => {
  if (navigator.language == null || navigator.language === '') {
    return i18nfallbackLocale
  }
  // 找到系统语言对应代码，转为小写避免意外
  const findLocale = i18nLocaleList.find(
    (i) => i.toLowerCase() === navigator.language.toLowerCase()
  )
  if (findLocale != null) {
    return findLocale
  }
  // 有的浏览器可能只返回语言标志，用startsWith匹配
  const findLocaleStartsWith = i18nLocaleList.find((i) =>
    i.toLowerCase().startsWith(navigator.language.toLowerCase())
  )
  if (findLocaleStartsWith != null) {
    return findLocaleStartsWith
  }
  return i18nfallbackLocale
})()

// 语言内容，写成函数有利于插入可变内容
// 同类的尽量保持开头单词一致有利于参数提示
export const i18nMessages = {
  pageHome: {
    'en-US': () => 'home',
    'zh-CN': () => '首页',
    'zh-TW': () => '首页',
  },
  pageChat: {
    'en-US': () => 'chat',
    'zh-CN': () => '全局聊天',
    'zh-TW': () => '全局聊天',
  },
  pageFile: {
    'en-US': () => 'file',
    'zh-CN': () => '文件',
    'zh-TW': () => '文件',
  },
  pageSetting: {
    'en-US': () => 'setting',
    'zh-CN': () => '设置',
    'zh-TW': () => '设置',
  },
  // as const 使其有完整的字面量类型推导
  // satisfies 确保其每一项不会缺少
  // 还需要确保每组函数类型是一样的，这个只能自己注意了
} as const satisfies Record<string, Record<I18nLocaleType, unknown>>

// 通过类型体操，获取i18nMessages键的类型
export type I18nMessagesKeyType = keyof typeof i18nMessages

// 将在 src\stores\i18n.ts 使用
// 页面中再使用 i18nStore.t 获取当前语言的内容
