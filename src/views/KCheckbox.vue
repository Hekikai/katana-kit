<template>
    <h1>Checkbox</h1>
    <h2>Checkbox active</h2>
    <div class="line">
        <k-checkbox
            v-model:checked="isChecked"
            id="checkboxActive"
            label="Checkbox active"
            name="checkboxActive"
            value="likeIt"
        />
    </div>

    <h2>Checkbox disabled</h2>
    <div class="line">
        <k-checkbox
            v-model:checked="isDisableChecked"
            id="checkboxDisable"
            label="Checkbox disabled"
            name="checkboxDisabled"
            value="likeThem"
            :disabled="isDisabled"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KCheckbox from '@/components/KCheckbox/KCheckbox.vue'

const isChecked = ref<boolean>(true)
const isDisabled = ref<boolean>(true)
const isDisableChecked = ref<boolean>(true)
</script>

<style scoped>
.line {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 1rem;
}
</style>
