<template>
    <h1>Radio</h1>
    <h2>Radio active</h2>
    <div class="line line__block">
        <p>Selected phone: {{ selectedPhone }}</p>
        <div
            v-for="phone in telephones"
            :key="phone.id"
        >
            <k-radio
                v-model="selectedPhone"
                :id="phone.id"
                :label="phone.name"
                :value="phone.name"
                name="phone"
            />
        </div>
    </div>

    <h2>Radio disabled</h2>
    <div class="line line__block">
        <p>Value of disabled radio: {{ '123' }}</p>
        <k-radio
            v-model="disabledRadioValue"
            value="123"
            label="I'm disabled"
            id="dis"
            name="dis"
            :disabled="disabledRadio"
        />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import KRadio from '@/components/KRadio/KRadio.vue'

const telephones = ref([
    {
        name: 'Samsung',
        id: '1',
    },
    {
        name: 'Iphone',
        id: '2',
    },
    {
        name: 'Huawei',
        id: '3',
    },
    {
        name: 'Lenovo',
        id: '4',
    },
])

const selectedPhone = ref('')
const disabledRadio = ref(true)
const disabledRadioValue = ref('yes')
</script>
