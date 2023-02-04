<template>
    <h1>Tabs</h1>
    <k-tabs v-model="selectedTab">
        <k-tab name="mails" />
        <k-tab name="author" />
        <k-tab name="xd" />
    </k-tabs>

    <div>
        {{ selectedTab }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KTabs from '@/components/KTabs/KTabs'
import KTab from '@/components/KTab/KTab'

const selectedTab = ref('mails')
</script>
