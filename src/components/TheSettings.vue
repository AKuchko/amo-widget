<template>
    <div class="settings">
        <ul class="settings__list">
            <li class="settings__item">
                <BaseSetting title="Setting 1"/>
            </li>
            <li class="settings__item">
                <BaseSetting title="Setting 2"/>
            </li>
            <li class="settings__item">
                <BaseSetting title="Setting 3"/>
            </li>
            <li class="settings__item">
                <BaseSetting title="Setting 4"/>
            </li>
            <li class="settings__item">
                <BaseSetting title="Setting 4"/>
            </li>
            <li class="settings__item">
                <BaseSetting title="Setting 4"/>
            </li>
        </ul>
    </div>
</template>

<script>
import BaseSetting from './common/BaseSetting.vue';

export default {
    name: 'TheSettings',
    components: { BaseSetting }
}
</script>

<style lang="scss">
.settings {
    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
    }
}
</style>