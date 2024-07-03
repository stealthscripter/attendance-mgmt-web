<template>
    <h1>Student List</h1>
    <div v-for="students in studentList" :key="students">
        <!-- <ClassSingleList :classes="classes"/> -->
         <StudentSingleList :students="students"/>
    </div>
</template>

<script>
    import StudentSingleList from '@/components/StudentSingleList.vue'
// import ClassSingleList from './ClassSingleList.vue';
    export default{
        // components: {ClassSingleList},
        components: {StudentSingleList},
        props: ['studentList'],

        setup(props){

        }    
    }
</script>

<style>


</style>