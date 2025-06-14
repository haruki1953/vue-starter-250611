<script setup lang="ts">
// 单列容器，可设置宽度，通过tailwind类控制样式

// 将默认值独立出来是因为这样才能有tailwind提示
// 默认居中
const defaultColContainerStyle = 'justify-center'
// 默认全宽度
const defaultCol1Style = 'flex-1'
withDefaults(
  defineProps<{
    colContainerStyle: string
    col1Style: string
  }>(),
  {
    colContainerStyle: defaultColContainerStyle,
    col1Style: defaultCol1Style,
  }
)
</script>

<template>
  <div class="container-col1">
    <div class="flex" :class="colContainerStyle">
      <div :class="col1Style">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
