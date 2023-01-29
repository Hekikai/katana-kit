<template>
    <h1>Progress</h1>
    <h2>Progress bar</h2>
    <div class="line line__block">
        <k-progress
            max-width="400px"
            :percent="percentMap.bar"
            color="secondary"
        />
        <k-btn
            label="Add 10 percent"
            @click="addPercent('bar')"
            color="primary"
            class="text-white"
        />
    </div>

    <h2>Circular progress bar</h2>
    <k-circular-progress :percent="percentMap.circle" />
    <k-btn
        label="Add 10 percent"
        @click="addPercent('circle')"
        color="primary"
        class="text-white"
    />

    <h2>Reset</h2>
    <k-btn
        color="info"
        label="Reset percentages"
        rounded
        class="text-white"
        @click="reset"
    />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import KProgress from '@/components/KProgress/KProgress.vue'
import KBtn from '@/components/KBtn/KBtn.vue'
import KCircularProgress from '@/components/KCircularProgress/KCircularProgress.vue'

const percentMap = reactive({
    bar: 40,
    circle: 40,
})

const addPercent = (mapKey: keyof typeof percentMap) => {
    percentMap[mapKey] += 10
    if (percentMap[mapKey] > 100) {
        percentMap[mapKey] = 100
    }
}

const reset = () => {
    percentMap.bar = 0
    percentMap.circle = 0
}
</script>

<style scoped></style>
