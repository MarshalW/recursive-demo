<template>
    <div v-if="selected">语言
        <div v-if="status!='Loading'">
            <label v-for="item in items" :key="item">
                <input type="checkbox" :value="item" v-model="checked"/>
                {{item}}
            </label>

            <button @click="handleClick(true)">确定</button>
            <button @click="handleClick(false)">取消</button>
        </div>
        <div v-if="status=='Loading'">
            Loading...
        </div>
    </div>

</template>

<script>
export default {
    name: "LanguageItemView",
    data: () => ({
        selected: false,
        status: 'Loading',
        items: [],
        checked: []
    }),
    props: ['params'],
    methods: {
        handleClick (confirm) {
            if (confirm) {
                this.$bus.$emit('search.add', {type: 'language', value: this.checked})
            }
            this.selected = false
        }
    },
    mounted () {
        this.$bus.$on(['search.select'], (e) => {
            if (e.type == 'language') {
                this.selected = true
                this.status = 'Loading'
                this.checked = this.params || []
                getLanguageItems().then((items) => {
                    this.items = items
                    this.status = "Loadded"
                })
            } else {
                this.selected = false
            }
        })

        this.$bus.$on(['search.remove', 'search.clear', 'search.run'], () => {
            this.selected = false;
        })
    }
}

//模拟api
function getLanguageItems () {
    return new Promise(resolve => {
        setTimeout(resolve, 400, [
            '中文', '英文'])
    })
}
</script>

<style scoped>

</style>