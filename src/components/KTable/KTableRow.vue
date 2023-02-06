<script setup lang="ts">
defineProps<{
    columnSize: string
    bgColor: string
}>()
</script>

<template>
    <div
        class="k-table-row"
        :style="{
            'grid-template-columns': columnSize,
            backgroundColor: bgColor,
        }"
    >
        <slot name="columns" />
    </div>
</template>

<style scoped></style>
