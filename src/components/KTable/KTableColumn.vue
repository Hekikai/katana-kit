<script setup lang="ts">
defineProps<{
    srcImage?: string
    image?: boolean
}>()
</script>

<template>
    <div class="k-table-column">
        <template v-if="image">
            <img
                :src="srcImage"
                alt=""
                class="k-table-column-image"
            />
        </template>
        <slot v-else />
    </div>
</template>

<style scoped></style>
