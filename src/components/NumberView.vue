<template>
    <div>
        <div v-if="status=='Loaded.'">
            <h3>数字展示: {{results[0]}}%</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "NumberView",
    props: ['status', 'results'],
    methods: {},
    mounted () {

    }
}
</script>

<style scoped>

</style>