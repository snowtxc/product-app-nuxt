<template>
  <div>
    <NuxtLayout >
       <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>

import { store } from '~/store/store';

const storeApp = store();
</script>
