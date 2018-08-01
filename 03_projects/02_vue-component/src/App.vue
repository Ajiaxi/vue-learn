<template>
    <div class="main">
        {{msg}}
        <my-component name="Jason"/>
    </div>
</template>
<script>
    import MyComponent from './components/MyComponent';
    export  default  {
        data(){
            return {
                msg: 'this is app.vue'
            }
        },
        components: {
            MyComponent
        }
    }
</script>
<style scoped>
    .main {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        text-align: center;
        font-size: 24px;
        color: #f33;
    }
</style>
