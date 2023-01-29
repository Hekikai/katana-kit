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

    <h2>Checkbox group</h2>
    <div class="line line__block">
        <p>Selected array: {{ selectedAnime }}</p>
        <k-checkbox-group
            v-model:value="selectedAnime"
            :options="animeList"
            name="anime"
        />
    </div>

    <h2>Switch</h2>
    <div class="line line__block">
        <p>Selected mood: {{ switchMyMood }}</p>
        <k-checkbox
            v-model:checked="switchMyMood"
            id="switch"
            label="Am i good?"
            name="switch"
            value="good"
            type="switch"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KCheckbox from '@/components/KCheckbox/KCheckbox.vue'
import KCheckboxGroup from '@/components/KCheckbox/KCheckboxGroup.vue'

const isChecked = ref<boolean>(true)
const isDisabled = ref<boolean>(true)
const isDisableChecked = ref<boolean>(true)

const animeList = ref([
    { name: 'Kimi no na wa', id: '1' },
    { name: 'Black Clover', id: '2' },
    { name: 'Boku no Hero Academia', id: '3' },
    { name: 'Kuroko no Basket', id: '4' },
])

const selectedAnime = ref(['1', '3'])

const switchMyMood = ref(false)
</script>
