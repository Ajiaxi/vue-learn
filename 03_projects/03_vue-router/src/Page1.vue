<template>
    <div class="main">
        {{msg}}
        <router-link to="/">Go back</router-link>
    </div>
</template>
<script>
    export  default  {
        data(){
            return {
                msg: 'this is page1'
            }
        }
    }
</script>
