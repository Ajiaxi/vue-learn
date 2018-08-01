<template>
    <div class="main">
    <p>当前值：{{ count }}</p>
    <p>
        <button @click="increment">加</button>
        <button @click="decrement(2)">减</button>
    </p>
        <router-link to="/">Go back</router-link>
    </div>
</template>
<script>
    // 参考：https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart
    import { mapGetters, mapState, mapActions } from 'vuex'
    export  default  {
        computed: {
            ...mapState('module1', {
                count: state => state.count
            })
        },
        methods: {
            // increment () {
            //     //this.$store.commit('increment')
            // },
            // decrement () {
            //     //this.$store.commit('decrement')
            // },
            ...mapActions('module1', [
              'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('module1/increment')`

              // `mapActions` 也支持载荷：
              'decrement' // 将 `this.decrement(count)` 映射为 `this.$store.dispatch('module1/decrement', count)`
            ]),
        }
    }
</script>
