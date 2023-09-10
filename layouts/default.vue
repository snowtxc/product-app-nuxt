<template>
    <div>
        <GlobalLoadingPage v-if="$appStore.getGlobalLoading"></GlobalLoadingPage>

        <Menu/>
        <slot></slot> 
    </div>
</template>

<script setup>
    import { store } from '~/store/store';

    const $appStore = store();
</script>
