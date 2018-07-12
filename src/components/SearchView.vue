<template>
    <div v-if="status=='Loaded.'">
        <input/>
        <button @click="handleSearch()">搜索</button>
    </div>
</template>

<script>
export default {
    name: "SearchView",
    props: ['status'],
    methods: {
        handleSearch () {
            this.$bus.$emit('search', 'keywords ...')
        }
    }
}
</script>

<style scoped>

</style>