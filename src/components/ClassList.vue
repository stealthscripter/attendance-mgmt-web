<template>

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
    padding: 0.5rem;
    border: 1px solid rebeccapurple;
}

</style>