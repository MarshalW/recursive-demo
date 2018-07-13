<template>
    <div>
        <button @click="handleClick('application')">应用 &nbsp; +</button>&nbsp;
        <button @click="handleClick('language')">语言 &nbsp; +</button>&nbsp;
        <input/>&nbsp;
        <button @click="handleSearch()">搜索</button>
    </div>
</template>

<script>
export default {
    name: "SearchCommandView",
    methods: {
        handleSearch () {
            this.$bus.$emit('search', 'keywords ...')
        },
        handleClick (type) {
            this.$bus.$emit('search.select', {type})
        }
    }
}
</script>

<style scoped>

</style>