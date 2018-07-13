<template>
    <div v-if="status=='Loaded.'">
        <condition-items-view/>
        <search-command-view/>
        <div class="selectArea">
            <select-language-view/>
            <select-applications-view/>
        </div>
    </div>
</template>

<script>
import SearchCommandView from './SearchCommandView'
import ConditionItemsView from './ConditionItemsView'
import SelectLanguageView from './SelectLanguageView'
import SelectApplicationsView from './SelectApplicationsView'

export default {
    name: "SearchView",
    props: ['status'],
    components: {
        SearchCommandView,
        ConditionItemsView,
        SelectLanguageView,
        SelectApplicationsView
    },
    methods: {}
}
</script>

<style scoped>
    .selectArea {
        padding-top: 20px;
    }
</style>