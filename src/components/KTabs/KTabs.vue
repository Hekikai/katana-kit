<script setup lang="ts">
defineProps<{
    names: Array<{ [k: string]: string }>
    selected?: string
}>()

const emit = defineEmits<{
    (e: 'change-tab', v: string): void
}>()

const clickTab = (tabName: string) => {
    emit('change-tab', tabName)
}
</script>

<template>
    <div class="k-tab-nav">
        <span
            v-for="tab in names"
            :class="['k-tab-nav__item', { selected: tab.name === selected }]"
            :key="tab.name"
            @click="clickTab(tab.name)"
        >
            {{ tab.label }}
        </span>
    </div>
    <div class="k-tab-content">
        <slot />
    </div>
</template>
