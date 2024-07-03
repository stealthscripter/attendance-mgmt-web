<template>
    <h1>CLassList</h1>
    <div v-for="classes in classList" :key="classes">
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


</style>