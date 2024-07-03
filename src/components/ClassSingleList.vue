<template>
    <router-link :to="{name: 'StudentView' , params:{id: classes.id}}">
    <div>
        <p>{{ classes.course }}</p>
        <p>{{ classes.section }}</p>
    </div>
</router-link>
</template>

<script>
    export default{
        props: ['classes'],
        setup(){

        }
    }
</script>

<style scoped>
    div{
        cursor: pointer;
        padding: 10px;
        margin: 0 auto;
        width: fit-content;
        border: 1px solid black;
    }

</style>