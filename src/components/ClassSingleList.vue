<template>
    <div class="single-class-list">
        <router-link :to="{name: 'StudentView' , params:{id: classes.id}}">
            <div>
                <p>{{ classes.course }}</p>
                <p>{{ classes.section }}</p>
            </div>
        </router-link>
    </div>
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
        margin: 1rem auto;
        width: fit-content;
        border: 1px solid black;
    }
    .single-class-list {
        width: 90%;
        border: 1px solid red;
    }

</style>