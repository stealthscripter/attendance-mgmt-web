<template>
    <h1>Student List</h1>
    <div class="header">
        <div><p>Name</p></div>
        <div><p>Id</p></div>
        <div><p>Class</p></div>
    </div>

    <div class="studentList" v-for="students in studentList" :key="students">
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
    }
    .header p{
        font-size: 1.1rem;
        font-weight: 600;
    }
    .studentList{
    }
</style>