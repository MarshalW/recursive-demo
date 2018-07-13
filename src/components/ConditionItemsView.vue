<template>
    <div>
        <span v-for="item in conditions">{{item.title}} <button>x</button></span>
        <div v-if="conditions.length>0">
            <button @click="handleClear">清空</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConditionItemView",
    data: () => ({
        conditions: []
    }),
    methods: {
        handleClear () {
            this.conditions = []
        }
    },
    mounted () {
        this.$bus.$on('search.addCondition', (condition) => {
            // this.conditions = this.conditions.filter((value) => {
            //     return value.type != condition.type
            // })
            condition.items.forEach((value) => {
                this.conditions.push({
                    title: value,
                    type: condition.type
                })
            })
        })
    }
}
</script>

<style scoped>

</style>