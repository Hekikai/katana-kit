<script setup lang="ts">
import { computed } from 'vue'

interface CheckboxOption {
    optionId: string
    checked: boolean
}

const CheckboxType = {
    switch: 'switch',
    checkbox: 'checkbox',
} as const

const props = withDefaults(
    defineProps<{
        name: string
        id: string
        value: string
        label: string
        checked: boolean
        disabled?: boolean
        group?: boolean
        type?: keyof typeof CheckboxType
    }>(),
    {
        name: '',
        value: '',
        label: '',
        checked: false,
        type: 'checkbox',
    },
)

const emit = defineEmits<{
    (e: 'update:checked', v: boolean): void
    (e: 'handle-group', v: CheckboxOption): void
}>()

const isItSwitch = computed(() => props.type === 'switch')

const handleInput = (event: Event) => {
    const isChecked = (<HTMLInputElement>event.target).checked

    if (props.group) {
        emit('handle-group', { optionId: props.id, checked: isChecked })
        return
    } else {
        emit('update:checked', isChecked)
    }
}
</script>

<template>
    <!--  TODO: don't line this div.  remove it with render-function-->
    <div :class="{ 'k-switch-container': isItSwitch }">
        <input
            :class="[
                { 'k-checkbox': type === 'checkbox' },
                { 'k-switch': isItSwitch },
            ]"
            type="checkbox"
            :name="name"
            :value="value"
            :id="id"
            :checked="checked"
            :disabled="disabled"
            @input="handleInput"
        />
        <label :for="id">{{ label }}</label>
        <label
            v-if="isItSwitch"
            class="k-switch__label"
            :for="id"
        >
            {{ label }}
        </label>
    </div>
</template>

<style scoped></style>
