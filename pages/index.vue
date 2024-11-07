<template>
  <div>
    {{ error }}
    <hr />
    {{ data2 }}
    <hr />

    {{  state  }}

    <Button @click="handleClick">Button</Button>

    <hr />

    <img src="/animal.jpg">
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useFetch('https://api.auth.dev.imokhonko.com/profile');

useHead({
  title: data.value ?? ''
});

// useSeoMeta({
//   title: data.mesage,
//   ogTitle: data.mesage,
//   description: data.mesage,
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })

const state = ref({ one: 1, two: 2 });

const data2 = ref('loading...') as any;
onMounted(async () => {
  try {
    data2.value = await $fetch('https://api.auth.dev.imokhonko.com/profile')
  } catch(e) {
    data2.value = e;
  }
});

const handleClick = () => {
  state.value.one += 1;
};
</script>