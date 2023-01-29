<script setup lang="ts">
enum InputTypes {
    text = 'text',
}

withDefaults(
    defineProps<{
        value: string
        name: string
        placeholder: string
        label: string
        type: keyof typeof InputTypes
        width: string
    }>(),
    {
        value: '',
        width: '300px',
    },
)

const emit = defineEmits<{
    (e: 'update:value', v: string): void
}>()

const handleInput = (event: Event) => {
  emit('update:value', (<HTMLInputElement>event.target).value)
}
</script>

<template>
    <div
        class="input-container"
        :style="{ width: width }"
    >
        <input
            class="k-input"
            :type="type"
            :name="name"
            :id="name"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput"
        />
        <label
            :for="name"
            class="k-input-label"
        >
            {{ label }}
        </label>
    </div>
</template>

<style scoped></style>
