<template>
    <h1>Button</h1>
    <h2>Colors</h2>
    <div class="line">
        <k-btn
            v-for="(_, color) in colors"
            :label="color"
            :color="color"
            class="text-white"
        />
    </div>
    <h2>Rounded</h2>
    <div class="line">
        <k-btn
            v-for="(_, color) in colors"
            :label="color"
            :color="color"
            class="text-white"
            rounded
        />
    </div>

    <h2>Disabled</h2>
    <div class="line">
        <k-btn
            v-for="(_, color) in colors"
            :label="color"
            :color="color"
            class="text-white"
            disabled
        />
    </div>

    <h2>Outlined</h2>
    <div class="line">
        <k-btn
            v-for="(_, color) in colors"
            :label="color"
            :color="color"
            :class="`text-${color}`"
            outlined
        />
    </div>

    <h2>Icon</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
            outlined
            icon="credit-card"
        />
        <k-btn
            label="Primary"
            color="secondary"
            rounded
            icon="heart"
        />
    </div>

    <h2>Click</h2>
    <div class="line">
        <k-btn
            label="@click"
            color="warning"
            @click="onClick"
            size="sm"
        />
        <k-btn
            label="@click"
            color="warning"
            @click="onClick"
            size="lg"
        />
    </div>
</template>

<script setup lang="ts">
import KBtn from '@/components/KButton/KBtn.vue'
import { IColors } from '@/types'

const colors = {
    primary: 'primary',
    success: 'success',
    secondary: 'secondary',
    danger: 'danger',
    info: 'info',
    warning: 'warning',
} satisfies Record<IColors, IColors>

const onClick = () => {
    alert('Click!')
}
</script>
