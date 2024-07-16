<template>
    <div class="single-class-list">
        <router-link :to="{name: 'StudentView' , params:{id: classes.id}}">
                <div class="course"><p>{{ classes.course }}</p></div>
                <div class="section"><p>{{ classes.section }}</p></div>
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
    }
    .single-class-list {
        padding: 0;
        margin: 0 auto;
        width: 30%;
        border-bottom: 1px solid black;
        
    }
    .single-class-list div{
        padding: 0;
        margin: 0.5rem;
    }
    .single-class-list:hover p{
        text-decoration: underline;
        color: black;
    }
    a{
        display: flex;
        color: black;
        text-decoration: none;
        justify-content: space-between;
    }
    p{
        margin: 0.5rem;
    }
    
</style>