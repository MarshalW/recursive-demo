<template>
    <li>
        <span> <router-link :to="{path:'/department'+'/'+node.id}">{{node.label}}</router-link> </span>
        <ul v-if='node.children && node.children.length'>
            <node-tree v-for="child in node.children" :node="child"/>
        </ul>
    </li>
</template>

<script>
export default {
    name: "NodeTree",
    props: {
        node: Object
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>