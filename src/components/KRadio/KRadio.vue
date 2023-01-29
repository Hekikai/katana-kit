<script setup lang="ts">
withDefaults(
    defineProps<{
        name: string
        id: string
        value: string | number
        label: string
        modelValue: string | number
        disabled?: boolean
    }>(),
    {
        name: '',
        value: '',
        label: '',
        type: 'checkbox',
    },
)

const emit = defineEmits<{
    (e: 'update:modelValue', v: string | number): void
}>()

const handleInput = (event: Event) => {
    emit('update:modelValue', (<HTMLInputElement>event.target).value)
}
</script>

<template>
    <input
        class="k-radio"
        type="radio"
        :name="name"
        :value="value"
        :id="id"
        :disabled="disabled"
        @input="handleInput"
    />
    <label :for="id">{{ label }}</label>
</template>

<style scoped></style>
