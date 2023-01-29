<script setup lang="ts">
import { IColors } from '@/types'

withDefaults(
    defineProps<{
        percent: number
        maxWidth?: string
        color?: IColors
    }>(),
    {
        color: 'primary',
        maxWidth: '300px',
    },
)
</script>

<template>
    <div
        class="k-progress-container"
        :style="{ maxWidth: maxWidth }"
    >
        <span
            class="k-progress-percent"
            :style="{ color: `var(--k-${color})` }"
        >
            {{ percent }}%
        </span>
        <div
            class="k-progress"
            :style="{ background: `var(--k-${color}-hover)` }"
        >
            <div
                class="k-progress-bar"
                :style="{
                    width: `${percent}%`,
                    background: `var(--k-${color})`,
                }"
            ></div>
        </div>
    </div>
</template>
