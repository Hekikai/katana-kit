<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IColors, ISizeName } from '@/types'
import useSize from '@/composables/useSize'

const props = withDefaults(
    defineProps<{
        label: string
        color?: IColors
        disabled?: boolean
        rounded?: boolean
        outlined?: boolean
        icon?: string
        size?: ISizeName
    }>(),
    {
        label: 'Button',
    },
)

const sizeProperties = useSize(props)

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
        :style="sizeProperties"
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
