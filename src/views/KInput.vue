<template>
    <h1>Input</h1>
    <h2>Input text</h2>
    <form>
        <k-input
            v-model:value="nameField"
            name="name"
            placeholder="Input your name"
            label="Your name"
            type="text"
        />
      {{ nameField }}
    </form>
</template>

<script setup lang="ts">
import KInput from '@/components/KInput/KInput.vue'
import { ref } from 'vue'

const nameField = ref('')
</script>

<style scoped></style>
