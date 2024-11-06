
import { NuxtLink } from '#build/components';
<template>
  <div>
    <div class="header-default p-[16px]">
      <NuxtLink to="/">index</NuxtLink> | 
      <NuxtLink to="/home">home</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header-default {
  & {
    font-weight: bold;
  }
}
</style>