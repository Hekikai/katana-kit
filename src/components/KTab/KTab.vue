<script setup lang="ts">
defineProps<{
    name: string
}>()

const emit = defineEmits<{
    (e: 'eventik', v: string): void
}>()

const foo = (name: string) => {
    emit('eventik', name)
}
</script>

<template>
    <span
        :class="['k-tab-nav__item']"
        @click="foo(name)"
    >
        {{ name }}
    </span>
</template>

<style scoped></style>


