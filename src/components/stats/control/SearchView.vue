<template>
    <div>
        <param-items-view :params="params"/>
        <search-command-view/>
        <div class="selectArea">
            <select-language-view :params="params.get('language')"/>
            <select-applications-view/>
            <select-date-time-view :params="params.get('between')"/>
        </div>
    </div>
</template>

<script>
import SearchCommandView from './SearchCommandView'
import ParamItemsView from './ParamItemsView'
import SelectLanguageView from './SelectLanguageView'
import SelectApplicationsView from './SelectApplicationsView'
import SelectDateTimeView from './SelectDateTimeView'

const defaultQuery = new Map()
defaultQuery.set('between', '过去14天')

export default {
    name: "SearchView",
    props: ['viewId'],
    data: () => ({
        params: new Map(defaultQuery),
    }),
    components: {
        SelectDateTimeView,
        SearchCommandView,
        ParamItemsView,
        SelectLanguageView,
        SelectApplicationsView
    },
    computed: {},
    methods: {
        initParams () {
            if (this.$route.query.params) {
                this.params = new Map(JSON.parse(this.$route.query.params))
                if (!this.params.has('between')) {
                    this.params.set('between', '过去14天')
                }
            } else {
                this.params = defaultQuery
            }

            this.$bus.$emit('search.keyword', this.params.get('keyword'))
        }
    },
    watch: {
        '$route' () {
            this.initParams()
        }
    },
    mounted () {
        this.initParams()

        //清空查询条件到默认查询状态
        this.$bus.$on('search.clear', () => {
            this.params = new Map(defaultQuery)
            this.$bus.$emit('search.keyword', this.params.get('keyword'))
        })

        //执行查询
        this.$bus.$on('search.run', () => {
            this.$router.push({
                path: '/department/' + this.viewId,
                query: {params: JSON.stringify([...this.params]), t: Date.now()}
            })
        })

        //增加查询条目
        this.$bus.$on('search.add', (e) => {
            let map = new Map(this.params)
            switch (e.type) {
                case 'language':
                    map.delete(e.type)
                    map.set(e.type, e.value)
                    this.params = map
                    break
                case 'keyword':
                    map.delete(e.type)
                    map.set(e.type, e.value)
                    this.params = map
                    break
                default:
                //
            }
        })

        //删除查询条目
        this.$bus.$on('search.remove', (e) => {

            if (e.type == 'between') {
                return
            }

            let map = new Map(this.params)
            let items = map.get(e.type)

            if (items instanceof Array) {
                let set = new Set(items)
                set.delete(e.value)
                if (set.size > 0) {
                    map.set(e.type, Array.from(set))
                } else {
                    map.delete(e.type)
                }

            } else {
                map.delete(e.type)
            }
            this.params = map
        })

        // 空
        this.$bus.$on('search.', () => {

        })
    }
}
</script>

<style scoped>
    .selectArea {
        padding-top: 20px;
    }

    button {

    }
</style>