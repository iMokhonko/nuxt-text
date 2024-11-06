<template>
  <div>
    {{ data }}
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
const { data } = await useFetch('/api/hello');

useHead({
  title: data.value.message
});

useSeoMeta({
  title: data.mesage,
  ogTitle: data.mesage,
  description: data.mesage,
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const state = ref({ one: 1, two: 2 });

const data2 = ref('loading...');
onMounted(async () => {
  data2.value = await $fetch('/api/hello')
});

const handleClick = () => {
  state.value.one += 1;
};
</script>