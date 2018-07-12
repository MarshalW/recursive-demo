<template>
    <div>
        <h3>部门</h3>
        <div>
            {{viewId}}
        </div>
        <div v-if="this.status=='Loading...'">{{status}}</div>
        <search-view :status="status"/>
        <number-view :status="status" :results="numberResults"/>
    </div>
</template>

<script>
import SearchView from './SearchView'
import NumberView from './NumberView'

export default {
    name: "DepartmentView",
    components: {
        SearchView, NumberView
    },
    watch: {
        '$route' (to) {
            this.viewId = to.params.id
            this.init(to.params.id)
        }
    },
    data () {
        return {
            viewId: '',
            status: 'Loading...',
            numberResults: [0]
        }
    },
    methods: {
        init (id) {
            this.status = 'Loading...'
            this.viewId = ''
            load().then(() => {
                this.status = 'Loaded.'
                this.viewId = id
                this.numberResults[0] = Math.floor((Math.random() * 100) + 1)
            })
        },
        handleSearch () {
            this.init(this.viewId)
        }
    },
    mounted () {
        this.init(this.$route.params.id)
        this.$bus.$on('search', this.handleSearch)
    }
}

function load () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 700)
    })
}
</script>

<style scoped>

</style>