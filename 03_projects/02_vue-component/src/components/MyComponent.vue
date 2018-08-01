<template>
    <div>
        {{message}} {{name}}
    </div>
</template>

<script>
    export  default  {
        data(){
            return {
                message: 'Hello Component'
            }
        },
        props:['name']
    }
</script>
