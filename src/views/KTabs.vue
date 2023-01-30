<template>
    <h1>Tabs</h1>
    <k-tabs v-model="selectedTab"/>
</template>

<script setup lang="ts">
import KTabs from '@/components/KTabs/KTabs.vue'
import { ref } from 'vue'

const tabs = [
    {
        name: 'About',
        label: 'Vue 3',
    },
    {
        name: 'React',
        label: 'Js library',
    },
    {
        name: 'Pl',
        label: 'Go',
    },
]

const selectedTab = ref('About')

const changeSelectedTab = (tagName: string) => {
    selectedTab.value = tagName
}
</script>

<style scoped></style>
