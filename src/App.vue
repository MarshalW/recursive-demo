<template>
    <div id="app">
        <Content v-if="hasAuth && tree" :tree="tree"/>
        <template v-if="hasAuth && !tree" :t="t" :tree="tree">
            <div>Loading...</div>
        </template>
        <login-view v-if="!hasAuth"/>
    </div>
</template>

<script>
const TREE = {
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

import Content from './components/Content.vue'
import LoginView from './components/auth/LoginView'

export default {
    name: 'app',
    data: () => ({
        hasAuth: false,
        tree: null
    }),
    components: {
        Content,
        LoginView
    },
    mounted () {
        this.$bus.$on('auth.login.ok', () => {
            this.hasAuth = true

            load().then((tree) => {
                this.hasAuth = true
                this.t = Date.now()
                this.tree = tree

                this.$router.replace('/department/' + tree.id)
            })
        })

        this.$bus.$on('auth.logout', () => {
            this.$router.push('/')
            this.hasAuth = false
            this.tree = null
        })
    }
}

function load () {
    return new Promise(resolve => {
        setTimeout(resolve, 1400, TREE)
    })
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
