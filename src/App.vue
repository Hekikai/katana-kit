<script setup lang="ts">
import TheHeader from '@/components/Layout/TheHeader.vue'
import TheSidebar from '@/components/Layout/TheSidebar.vue'
</script>

<template>
    <div class="container">
        <the-header />
        <the-sidebar />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
@import './css/index.scss';

.content {
    max-width: 1400px;
    margin-left: 250px;
    padding: 30px;
    transition: 0.2s;
    &_full {
        margin-left: 0;
    }
}
</style>
