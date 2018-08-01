<template>
    <div>
        {{msg}}
        <li><router-link to="/page">Go to page</router-link></li>
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
