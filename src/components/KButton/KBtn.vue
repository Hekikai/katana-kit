<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IColors } from '@/types'

withDefaults(
    defineProps<{
        label: string
        color?: IColors
        disabled?: boolean
        rounded?: boolean
        outlined?: boolean
        icon?: string
        // TODO: add sizes with composable
        size?: string
    }>(),
    {
        label: 'Button',
    },
)

const emit = defineEmits<{
    (e: 'click'): void
}>()

const kButtonClick = () => {
    emit('click')
}
</script>

<template>
    <button
        @click="kButtonClick"
        :class="[
            'k-btn',
            color ? `k-btn--${color}` : false,
            { 'k-btn--rounded': rounded },
            { disabled: disabled },
            { 'k-btn--outline': outlined },
            { icon: icon },
        ]"
        :disabled="disabled"
    >
        <span v-if="icon">
            <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
        </span>
        <span v-else>
            {{ label }}
        </span>
    </button>
</template>

<style scoped lang="scss"></style>
