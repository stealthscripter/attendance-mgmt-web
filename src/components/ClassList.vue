<template>
    <div class="header">
        <div class="course"><p>Course</p></div>
        <div class="section"><p>Section</p></div>
    </div>
    <div class="class-list" v-for="classes in classList" :key="classes">
        <ClassSingleList :classes="classes"/>
    </div>
</template>

<script>
import ClassSingleList from './ClassSingleList.vue';
    export default{
        components: {ClassSingleList},
        props: ['classList'],
        setup(props){

        }    
    }
</script>

<style>
.class-list{
    margin: 0;
    padding: 0;
}
.header{
        margin: 0 auto;
        width: 30%;
        display: flex;
        justify-content: space-between;
    }
    .header div{
        width: 100px;
        padding: 0;
        margin: 0;
        border-bottom: 1px solid black;
    }
    .header div p{
        margin: 0.5rem;
        padding: 0;
    }
</style>