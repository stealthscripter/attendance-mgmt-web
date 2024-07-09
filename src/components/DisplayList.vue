<template>
       
    <div v-for="attendance in dateFiltered" :key="attendance.date">
            <div class="student-list" v-for="student in attendance.students" :key="student.id" :class="{'present' : student.status}">
                <div><p>{{ student.name }}</p></div>
                <div><p>{{ student.status ? "present" : "Absent" }}</p></div>
            </div>
    </div>
</template>

<script>
    import SingleDisplayList from '@/components/SingleDisplayList.vue'
    export default {
        components: {SingleDisplayList},
        props: ['dateFiltered'],
        setup(){
            
        }
    }
</script>

<style scoped>
    div{
        padding: 10px;
        margin: 1rem auto;
    }

    .student-list{
        display: flex;
        color: black;
        justify-content: space-between;
        padding: 0;
        width: 30%;
        border: 1px solid red;
        border-radius: 1rem;
    }
    .student-list div{
        padding: 0;
        margin: 0;
    }
    p{
        margin: 0.5rem;
    }
    .present{
        border: 1px solid green;
    }

</style>