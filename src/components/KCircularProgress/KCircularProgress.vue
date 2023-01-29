<script setup lang="ts">
import { IColors } from '@/types'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        percent: number
        color?: IColors
    }>(),
    {
        color: 'primary',
    },
)

const dashOffset = computed(() => Math.floor(100 - props.percent))
const percentToShow = computed(() => Math.floor(props.percent))
</script>

<template>
    <div class="k-progress-circle">
        <span
            class="k-progress-circle-percent"
            :style="{ color: `var(--k-${color})` }"
        >
            {{ percentToShow }}%
        </span>
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            class="k-progress-circle-svg"
        >
            <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                :stroke="`var(--k-${color}-hover)`"
                stroke-width="12"
            />
            <circle
                class="k-progress-circle-line"
                :stroke-dashoffset="dashOffset"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                :stroke="`var(--k-${color})`"
                stroke-width="12"
                pathLength="100"
            />
        </svg>
    </div>
</template>
