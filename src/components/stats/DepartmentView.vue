<template>
    <div>
        <h3>部门</h3>
        <search-view :viewId="viewId"/>
        <number-view :results="results" :status="status"/>
    </div>
</template>

<script>
import SearchView from './control/SearchView'
import NumberView from './number/NumberView'

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
            numberResults: [0],
            results: null,
            status: 'loading',
        }
    },
    methods: {
        init (id) {
            this.viewId = ''
            this.status = 'loading'
            let {params} = this.$route.query

            if (params) {
                params = '?q=' + params
            } else {
                params = ''
            }

            load('https://path/query' + params).then(() => {
                this.viewId = id
                this.numberResults = [Math.floor((Math.random() * 100) + 1)]

                this.results = {
                    numbers: [Math.floor((Math.random() * 100) + 1)],
                    tables: []
                }

                this.status = 'loaded'
                this.$bus.$emit('search.results', {results: this.results})
            })
        },
        handleSearch () {
            this.init(this.viewId)
        }
    },
    mounted () {
        this.init(this.$route.params.id)
    }
}

function load (url) {
    console.log('GET ' + url)
    return new Promise(resolve => {
        setTimeout(resolve, 400)

        // throw '服务器查询错误'
    })
}
</script>

<style scoped>

</style>