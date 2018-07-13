<template>
    <div v-if="selected">语言
        <div v-if="status!='Loading'">
            <!-- TODO 下面偷懒了 -->
            <input type="checkbox" name="languageItem" value="中文" @click="handleCheck"/>中文
            <input type="checkbox" name="languageItem" value="英文" @click="handleCheck"/>英文
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
        checkedItems: new Set()
    }),
    methods: {
        handleCheck (e) {
            if (e.target.checked) {
                this.checkedItems.add(e.target.value)
            } else {
                this.checkedItems.delete(e.target.value)
            }
        },
        handleClick (confirm) {
            if (confirm && this.checkedItems.size > 0) {
                this.$bus.$emit('search.addCondition', {
                    type: 'language',
                    items: this.checkedItems
                })
            }

            this.selected = false
        }
    },
    mounted () {
        this.$bus.$on('search.select', (params) => {
            if (params.type === 'language') {
                this.status = 'Loading'
                this.selected = true
                this.items = []
                getLanguageItems().then((items) => {
                    this.status = 'Loaded'
                    this.items = items
                })
            } else {
                this.selected = false
            }
        })
    }
}

//模拟api
function getLanguageItems () {
    return new Promise(resolve => {
        setTimeout(resolve, 400, ['中文', '英文'])
    })
}
</script>

<style scoped>

</style>