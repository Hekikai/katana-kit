<template>
    <h1>Button</h1>
    <h2>Colors</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
            class="text-white"
        />
        <k-btn
            label="Secondary"
            color="secondary"
            class="text-white"
        />
        <k-btn
            label="Success"
            color="success"
            class="text-white"
        />
        <k-btn
            label="Info"
            color="info"
            class="text-white"
        />
        <k-btn
            label="Warning"
            color="warning"
            class="text-white"
        />
        <k-btn
            label="Danger"
            color="danger"
            class="text-white"
        />
    </div>
    <h2>Rounded</h2>
    <div class="line">
        <k-btn
            class="text-white"
            label="Primary"
            color="primary"
            rounded
        />
        <k-btn
            class="text-white"
            label="Secondary"
            color="secondary"
            rounded
        />
        <k-btn
            class="text-white"
            label="Success"
            color="success"
            rounded
        />
        <k-btn
            class="text-white"
            label="Info"
            color="info"
            rounded
        />
        <k-btn
            class="text-white"
            label="Warning"
            color="warning"
            rounded
        />
        <k-btn
            class="text-white"
            label="Danger"
            color="danger"
            rounded
        />
    </div>

    <h2>Disabled</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
            class="text-white"
            disabled
        />
        <k-btn
            label="Secondary"
            color="secondary"
            class="text-white"
            disabled
        />
        <k-btn
            label="Success"
            color="success"
            class="text-white"
            disabled
        />
        <k-btn
            label="Info"
            color="info"
            class="text-white"
            disabled
        />
        <k-btn
            label="Warning"
            color="warning"
            class="text-white"
            disabled
        />
        <k-btn
            label="Danger"
            color="danger"
            class="text-white"
            disabled
        />
    </div>

    <h2>Outlined</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
            class="text-primary"
            outlined
        />
        <k-btn
            label="Secondary"
            color="secondary"
            class="text-secondary"
            outlined
        />
        <k-btn
            label="Success"
            color="success"
            class="text-success"
            outlined
        />
        <k-btn
            label="Info"
            color="info"
            class="text-info"
            outlined
        />
        <k-btn
            label="Warning"
            color="warning"
            class="text-warning"
            outlined
        />
        <k-btn
            label="Danger"
            color="danger"
            class="text-danger"
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
        />
    </div>
</template>

<script setup>
import KBtn from '@/components/KButton/KBtn.vue'
const colors = {
    primary: 'primary',
    success: 'success',
}
const onClick = () => {
    alert('Click!')
}
</script>

<style scoped lang="scss">
.line {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 1rem;
}
</style>
