<template>
    <div>
        <button @click="handleClick('application')">应用 &nbsp; +</button>&nbsp;
        <button @click="handleClick('language')">语言 &nbsp; +</button>&nbsp;
        <button @click="handleClick('between')">日期时间 &nbsp; +</button>&nbsp;
        <input v-model="keyword"/>&nbsp;
        <button @click="handleSearch()">搜索</button>
        <button @click="handleClear">清空</button>
    </div>
</template>

<script>
export default {
    name: "SearchCommandView",
    data: () => ({
        keyword: ''
    }),
    methods: {
        handleSearch () {
            if (this.keyword) {
                this.$bus.$emit('search.add', {type: 'keyword', value: this.keyword})
            }
            setTimeout(() => {
                this.$bus.$emit('search.run')
            }, 0)

        },
        handleClick (type) {
            this.$bus.$emit('search.select', {type})
        },
        handleClear () {
            this.$bus.$emit('search.clear')
        }
    },
    mounted () {
        this.$bus.$on('search.keyword', (keyword) => {
            this.keyword = keyword
        })
    }
}
</script>

<style scoped>

</style>