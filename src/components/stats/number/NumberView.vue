<template>
    <div>
        <div v-if="status=='loading'">
            Loading...
        </div>
        <div v-else>
            <h3>数字展示: {{results.numbers[0]}}%</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "NumberView",
    props: ['results', 'status'],
    data () {
        return {}
    },
    methods: {},
    mounted () {
    }
}
</script>

<style scoped>

</style>