<template>
    <div>
        {{msg}}
        <li><router-link to="/page1">Go to page1</router-link></li>
        <li><router-link to="/page2">Go to page2</router-link></li>
    </div>
</template>
<script>
    export  default  {
        data(){
            return {
                msg: 'this is Home page'
            }
        }
    }
</script>
