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
    margin: 0;
    padding: 0;
}

</style>