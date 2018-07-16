<template>
    <div v-if="selected">应用</div>
</template>

<script>
export default {
    name: "SelectApplicationView",
    data: () => ({
        selected: false
    }),
    mounted () {
        this.$bus.$on(['search.select', 'search.remove', 'search.clear', 'search.run',], (e) => {
            if (e && e.type === 'application') {
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