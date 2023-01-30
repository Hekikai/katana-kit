<template>
    <h1>Tabs</h1>
    <k-tabs v-model="selectedTab" @blur="foo">
        <k-tab name="mails" />
        <k-tab name="author" />
        <k-tab name="xd" />
    </k-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import KTabs from '@/components/KTabs/KTabs.vue'
import KTabs from '@/components/KTabs/KTabs'
// import KTab from '@/components/KTab/KTab.vue'
import KTab from "@/components/KTab/KTab";
const foo = () => {}
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
