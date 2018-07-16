<template>
    <div>
        <button @click="handleLogout">登出</button>
        <h2>递归导航</h2>
        <hr/>
        <ul>
            <node-tree :node="tree"></node-tree>
        </ul>
        <hr/>
        <router-view></router-view>

    </div>
</template>

<script>

import NodeTree from './NodeTree'

const tree = {
    id: 0,
    label: "所有部门",
    children: [
        {
            id: 1,
            label: "研发部",
            children: [
                {id: 2, label: "产品组"},
                {id: 3, label: "开发组"},
                {id: 4, label: "运维组"},
            ]
        },
        {id: 5, label: "市场部"},
    ]
}

export default {
    name: "Content",
    props: ['tree'],
    components:
        {
            NodeTree
        }
    ,
    data: () => ({}),
    mounted () {
    },
    methods: {
        handleLogout () {
            this.$bus.$emit('auth.logout')
        }
    }
}

</script>

<style scoped>
    ul {
        padding-left: 100px;
        list-style: none;
    }

    ul span {
        text-align: left;
        padding-left: 1px;
    }
</style>