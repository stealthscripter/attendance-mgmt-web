<template>
    <div class="single-student-list">
        <div class="name-div"><p class="name">{{ students.name }}</p></div>
        <div class="id-div"><p class="id">{{ students.id }}</p></div>
        <div class="class-div"><p class="class">{{ students.classid }}</p></div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default{
        props: ['students']
        
    }
</script>

<style scoped>
    div{
        cursor: pointer;
        padding: 10px;
        margin: 1rem auto;
        width: fit-content;
    }
    .single-student-list {
        display: flex;
        padding: 0;
        width: 30%;
        border: 1px solid red;
        border-radius: 1rem;
        justify-content: space-between;
    }
    .single-student-list div{
        width: 100px;
        padding: 0;
        margin: 0
    }
    p{
        margin: 0.5rem;
    }
</style>