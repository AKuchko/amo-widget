<template>
    <div class="base-setting">
        <p class="base-setting__title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'BaseSetting',
    props: {
        title: {
            type: String,
        },
        icon: {
            type: String,
            default: '',
        },
    }
}
</script>

<style lang="scss">
.base-setting {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    padding: 30px;
    border-radius: 5px;
    background: #555;
    text-transform: uppercase;
}
</style>