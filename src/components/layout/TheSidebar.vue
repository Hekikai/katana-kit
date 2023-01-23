<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
    { name: 'Typography', href: '/typography' },
    { name: 'Button', href: '/button' },
    { name: 'Checkbox', href: '/checkbox' },
])
</script>

<template>
    <div class="sidebar">
        <router-link
            class="sidebar__link"
            v-for="link in links"
            :key="link.name"
            :to="link.href"
        >
            {{ link.name }}
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    left: 0;
    top: 62px;
    height: 100%;
    background: #fff;
    position: fixed;
    width: 250px;
    padding: 20px;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

    &__link {
        display: block;
        border-radius: 12px;
        border: 2px solid #fff;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
            color: var(--k-primary-hover);
        }
    }
}
</style>
