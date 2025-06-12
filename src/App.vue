<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useTestStore } from './stores'
import { RiHeartFill } from '@remixicon/vue'
import { i18nLocaleInfo, i18nLocaleList } from './config'
import { useI18nStore } from './stores'

const testStore = useTestStore()

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const

const i18nStore = useI18nStore()
</script>

<template>
  {{ i18nStore.t('pageHome')() }}
  <div>
    <ElButton
      v-for="key in i18nLocaleList"
      :key="key"
      @click="i18nStore.localeSet(key)"
    >
      {{ `${i18nLocaleInfo[key].language}(${i18nLocaleInfo[key].region})` }}
    </ElButton>
  </div>
  <RiHeartFill size="36px" color="red" className="my-icon" />
  <i class="ri-admin-line"></i>
  <i class="ri-admin-fill"></i>
  <div class="mb-4">
    <ElButton>Default</ElButton>
    <ElButton type="primary">Primary</ElButton>
    <ElButton type="success">Success</ElButton>
    <ElButton type="info">Info</ElButton>
    <ElButton type="warning">Warning</ElButton>
    <ElButton type="danger">Danger</ElButton>
  </div>

  <div class="mb-4">
    <ElButton plain>Plain</ElButton>
    <ElButton type="primary" plain>Primary</ElButton>
    <ElButton type="success" plain>Success</ElButton>
    <ElButton type="info" plain>Info</ElButton>
    <ElButton type="warning" plain>Warning</ElButton>
    <ElButton type="danger" plain>Danger</ElButton>
  </div>

  <div class="mb-4">
    <ElButton round>Round</ElButton>
    <ElButton type="primary" round>Primary</ElButton>
    <ElButton type="success" round>Success</ElButton>
    <ElButton type="info" round>Info</ElButton>
    <ElButton type="warning" round>Warning</ElButton>
    <ElButton type="danger" round>Danger</ElButton>
  </div>

  <div class="mb-4">
    <ElButton disabled>Default</ElButton>
    <ElButton type="primary" disabled>Primary</ElButton>
    <ElButton type="success" disabled>Success</ElButton>
    <ElButton type="info" disabled>Info</ElButton>
    <ElButton type="warning" disabled>Warning</ElButton>
    <ElButton type="danger" disabled>Danger</ElButton>
  </div>

  <div class="mb-4">
    <ElButton plain disabled>Plain</ElButton>
    <ElButton type="primary" plain disabled>Primary</ElButton>
    <ElButton type="success" plain disabled>Success</ElButton>
    <ElButton type="info" plain disabled>Info</ElButton>
    <ElButton type="warning" plain disabled>Warning</ElButton>
    <ElButton type="danger" plain disabled>Danger</ElButton>
  </div>

  <p>Basic text button</p>
  <div class="mb-4">
    <ElButton
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
    >
      {{ button.text }}
    </ElButton>
  </div>

  <p>Background color always on</p>
  <div class="mb-4">
    <ElButton
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
    >
      {{ button.text }}
    </ElButton>
  </div>

  <p>Disabled text button</p>
  <div>
    <ElButton
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
    >
      {{ button.text }}
    </ElButton>
  </div>
  <header>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    {{ testStore.testVal }}
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      height="125"
      width="125"
      @click="testStore.testValAdd()"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
