<template>
    <div>
        <template v-for="(list,key) in Array.from(params)">
            <template v-for="(item,index) in list" v-if="index>0">
                <template v-if="(typeof(item) == 'string' || item instanceof String)">
                    <template v-if="list[0]!='keyword'">
                        <span :key="key+'-'+index">{{item}}</span>
                        <button @click="handleRemoveItem(list[0],list[index])">x</button>&nbsp;
                    </template>
                </template>
                <template v-else v-for="(v,i) in Array.from(item)">
                    <span :key="key+'-'+index+'-'+i">{{v}}</span>
                    <button @click="handleRemoveItem(list[0],v)">x</button>&nbsp;
                </template>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: "ParamItemView",
    props: ['params'],
    methods: {
        handleRemoveItem (type, value) {
            this.$bus.$emit('search.remove', {type, value})
        },
    },
    mounted () {
    }
}
</script>

<style scoped>

</style>