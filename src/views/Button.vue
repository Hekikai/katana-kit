// @prettier-ignore
<template>
    <h1>Button</h1>
    <h2>Colors</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
        />
        <k-btn
            label="Secondary"
            color="secondary"
        />
        <k-btn
            label="Success"
            color="success"
        />
        <k-btn
            label="Info"
            color="info"
        />
        <k-btn
            label="Warning"
            color="warning"
        />
        <k-btn
            label="Danger"
            color="danger"
        />
    </div>
    <h2>Rounded</h2>
    <div class="line">
        <k-btn
            label="Primary"
            color="primary"
            rounded
        />
        <k-btn
            label="Secondary"
            color="secondary"
            rounded
        />
        <k-btn
            label="Success"
            color="success"
            rounded
        />
        <k-btn
            label="Info"
            color="info"
            rounded
        />
        <k-btn
            label="Warning"
            color="warning"
            rounded
        />
        <k-btn
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
            disabled
        />
      <k-btn
        label="Secondary"
        color="secondary"
        disabled
      />
      <k-btn
        label="Success"
        color="success"
        disabled
      />
      <k-btn
        label="Info"
        color="info"
        disabled
      />
      <k-btn
        label="Warning"
        color="warning"
        disabled
      />
      <k-btn
        label="Danger"
        color="danger"
        disabled
      />
    </div>

    <h2>Outlined</h2>
    <div class="line">
      <k-btn
        label="Primary"
        color="primary"
        outlined
      />
      <k-btn
        label="Secondary"
        color="secondary"
        outlined
      />
      <k-btn
        label="Success"
        color="success"
        outlined
      />
      <k-btn
        label="Info"
        color="info"
        outlined
      />
      <k-btn
        label="Warning"
        color="warning"
        outlined
      />
      <k-btn
        label="Danger"
        color="danger"
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
const onClick = () => {
    alert('Click!')
}
</script>

<style scoped lang="scss">
.line {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}
</style>
