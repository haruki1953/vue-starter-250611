<script setup lang="ts">
import { useI18nStore } from '@/stores'
import TheWelcome from '../components/TheWelcome.vue'

const i18nStore = useI18nStore()

useSeoMeta({
  title: computed(() => i18nStore.t('pageHome')()),
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
