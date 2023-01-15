<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

withDefaults(
    defineProps<{
        label: string
        color?: string
        disabled?: boolean
        rounded?: boolean
        outlined?: boolean
        icon?: string
        // TODO: add sizes with composable
        size?: string
    }>(),
    {
        label: 'Button',
        color: 'primary',
        default: 'normal',
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
            `k-btn--${color}`,
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
