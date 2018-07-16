<template>
    <div v-if="selected">
        <div>日期时间</div>
        <div>{{this.params}}</div>
    </div>
</template>

<script>
export default {
    name: "SelectDateTimeView",
    data: () => ({
        selected: false,
    }),
    props: ['params'],
    mounted () {
        this.$bus.$on(['search.select', 'search.remove', 'search.clear', 'search.run'], (e) => {
            if (e && e.type == 'between') {
                this.selected = true
            } else {
                this.selected = false
            }
        })
    }
}
</script>

<style scoped>

</style>