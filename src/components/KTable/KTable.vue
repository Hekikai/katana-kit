<script setup lang="ts">
defineProps<{
    head: string[]
    columnSize: string
}>()
</script>

<template>
    <div class="k-table-wrapper">
        <div class="k-table">
            <div
                class="k-table-head"
                :style="{ 'grid-template-columns': columnSize }"
            >
                <div
                    v-for="(elem, idx) in head"
                    :key="idx"
                    class="k-table-head__name"
                >
                    {{ elem }}
                </div>
            </div>

          <slot/>
        </div>
    </div>
</template>

<style scoped></style>
