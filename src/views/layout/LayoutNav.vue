<script setup lang="ts">
import { appIcon } from '@/config'
import { routerNavInfo } from '@/router'
import { useI18nStore } from '@/stores'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()
const isNavItemActive = (item: { path: string }) => {
  if (item.path === '/') {
    return route.path === item.path
  }
  return route.matched.some((record) => record.path === item.path)
}

const i18nStore = useI18nStore()
</script>

<template>
  <div class="layout-nav">
    <ContainerCol2 col1Position="left" col1Style="flex-1" col2Style="w-24">
      <template #col1>
        <RouterView></RouterView>
      </template>
      <template #col2>
        <div class="flex min-h-screen items-center justify-center">
          <div class="my-5 flex flex-col items-center">
            <template v-for="item in routerNavInfo.navList" :key="item.name">
              <ElTooltip
                :content="i18nStore.t(item.titleI18nMessageKey)()"
                placement="left"
                effect="light"
              >
                <RouterLink
                  :to="item.path"
                  :class="{
                    'border-el-primary text-el-primary': isNavItemActive(item),
                    'border-color-background-soft hover:border-el-primary-light-8':
                      !isNavItemActive(item),
                  }"
                  class="my-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 bg-color-background-soft transition-colors hover:bg-el-primary-light-8 hover:text-el-primary"
                >
                  <component :is="item.icon"></component>
                </RouterLink>
              </ElTooltip>
            </template>
            <ElTooltip
              :content="
                i18nStore.t(routerNavInfo.navPage.titleI18nMessageKey)()
              "
              placement="left"
              effect="light"
            >
              <RouterLink
                :to="routerNavInfo.navPage.path"
                :style="{
                  backgroundImage: `url('${appIcon}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
                :class="{
                  'border-el-primary text-el-primary': isNavItemActive(
                    routerNavInfo.navPage
                  ),
                  'border-color-background-soft hover:border-el-primary-light-8':
                    !isNavItemActive(routerNavInfo.navPage),
                }"
                class="my-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 bg-color-background-soft bg-cover bg-center transition-colors hover:bg-el-primary-light-8"
              >
              </RouterLink>
            </ElTooltip>
          </div>
        </div>
      </template>
    </ContainerCol2>
  </div>
</template>

<style lang="scss" scoped>
.layout-nav {
  max-width: 2000px;
  margin: 0 auto;
}
</style>
